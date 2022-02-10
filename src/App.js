import { useState } from 'react';
import { useImmer } from 'use-immer';

import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import Navigation from './Navigation.js';
//import Flatmate from './Flatmates.js';
import Fetchcharacters from './Fetch.js';

export default function App() {
  const [rooms, updateRooms] = useImmer([
    //useState Verwendung mit IMMER
    {
      text: 'Küche',
      description: 'Herdplatten nicht vergessen',
      isDescriptionVisible: true,
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen auch auf dem Fensterbrett',
      isDescriptionVisible: true,
      isClean: false,
    },
    {
      text: 'Bad',
      description: 'eigener Lappen für das WC',
    },
  ]);

  const [currentPage, setCurrentPage] = useState('rooms'); // 'rooms' or 'flatmates'

  return (
    <>
      <main className="App">
        <Header>Happy Cleaning</Header>
        <section>
          {currentPage === 'rooms' &&
            rooms.map(
              ({ text, description, isDescriptionVisible, isClean }, index) => (
                <Room
                  key={text}
                  text={text}
                  description={description}
                  isDescriptionVisible={isDescriptionVisible}
                  isClean={isClean}
                  toggleStatus={event => {
                    event.stopPropagation();
                    updateRooms(draft => {
                      draft[index].isClean = !isClean;
                    }); //funktion by IMMER
                    //ersetzt ohne IMMER mit setState
                    // setRooms([
                    //   ...rooms.slice(0, index),
                    //   { ...rooms[index], isClean: !isClean },
                    //   ...rooms.slice(index + 1),
                    // ]);
                  }}
                />
              )
            )}
        </section>
        {currentPage === 'flatmates' && (
          <main className="FlatmatesPage">
            <h2>Flatmates</h2>
            <section>
              <Fetchcharacters />
            </section>
          </main>
        )}
      </main>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

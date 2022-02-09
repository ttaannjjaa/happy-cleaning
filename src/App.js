import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import { useImmer } from 'use-immer';

export default function App() {
  const [rooms, updateRooms] = useImmer([
    //state Verwendung mit IMMER
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
  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(
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
    </main>
  );
}

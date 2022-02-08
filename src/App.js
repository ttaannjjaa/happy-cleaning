import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  const rooms = [
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
  ];

  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(({ text, description, isDescriptionVisible, isClean }) => (
        <Room
          key={text}
          text={text}
          description={description}
          isDescriptionVisible={isDescriptionVisible}
          isClean={isClean}
        />
      ))}
    </main>
  );
}

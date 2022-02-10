import { useState, useEffect } from 'react';
//import Flatemate from 'Flatmates,js';

export default function Fetchcharacters() {
  const [characters, setCharacters] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    loadCharacters();
  }, []);

  async function loadCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');

      if (response.ok) {
        // check, if there is ('no 404')
        const data = await response.json();
        setCharacters(data.results); //results Einsprungpunkt URL
      } else {
        // make code execution continue in catch block
        throw new Error('404 - not found');
      }
    } catch (error) {
      console.log(error.message);
      setHasError(true);
    }
  }

  return (
    <div className="input_Flatmates">
      {hasError && <p>Error: could not load characters.</p>}
      <ul>
        {characters.map(({ name, status, id }) => (
          <li key={id}>
            name={name} status={status}
          </li>
        ))}
      </ul>
    </div>
  );
}

import './Navigation.css';
import { useState } from 'react';

export default function Navigation({ setCurrentPage }) {
  const [active, setActive] = useState(true);

  const statusButtonClassName = active ? 'Nav__button active' : 'Nav__button';

  const statusButtonClassName2 = !active ? 'Nav__button active' : 'Nav__button';

  return (
    <div className="Nav">
      <button
        onClick={event => {
          event.stopPropagation();
          setCurrentPage('rooms');
          setActive(!active);
        }}
        className={statusButtonClassName}
      >
        Rooms
      </button>
      <button
        onClick={event => {
          event.stopPropagation();
          setCurrentPage('flatmates');
          setActive(!active);
        }}
        className={statusButtonClassName2}
      >
        Flatmates
      </button>
    </div>
  );
}

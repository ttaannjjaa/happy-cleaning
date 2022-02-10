import { useState } from 'react';
import './Room.css';

export default function Room({ text, isClean, description, toggleStatus }) {
  const [isDescriptionVisible, setIsDescriptionsVisible] = useState(false);

  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';

  return (
    <section onClick={toggleDescription} className="Room">
      <header className="Room__header">
        <h2 className="Room__heading">{text}</h2>
        <button onClick={toggleStatus} className={statusClassName}></button>
      </header>
      <p hidden={!isDescriptionVisible}>{description}</p>
    </section>
  );

  function toggleDescription() {
    setIsDescriptionsVisible(!isDescriptionVisible);
  }
}

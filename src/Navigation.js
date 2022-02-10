import './Navigation.css';

export default function Navigation({ setCurrentPage, pressed }) {
  const statusButtonClassName = pressed ? 'Nav__button active' : 'Nav__button';

  return (
    <div className="Nav">
      <button
        onClick={() => setCurrentPage('rooms')}
        className={statusButtonClassName}
      >
        Rooms
      </button>
      <button
        onClick={() => setCurrentPage('flatmates')}
        className={statusButtonClassName}
      >
        Flatmates
      </button>
    </div>
  );
}

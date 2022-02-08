import './Room.css';

export default function Room({
  text,
  isClean,
  description,
  isDescriptionVisible,
}) {
  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';
  return (
    <section className="Room">
      {text}
      {isDescriptionVisible && <p className="TextDescription">{description}</p>}
      <div className={statusClassName}></div>
    </section>
  );
}

//<p hidden={!isDescriptionVisible}>{description}}</p>//

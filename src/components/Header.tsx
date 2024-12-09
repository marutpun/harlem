export default function Header({ heading }: { heading: string }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{heading}</h1>
      </div>
    </header>
  );
}

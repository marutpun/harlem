import { Mouse } from "lucide-react";

export default function Header({ heading }: { heading: string }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{heading}</h1>
        <p className="header__cta">
          <Mouse aria-hidden="true" />
          Scroll down to continue
        </p>
      </div>
    </header>
  );
}

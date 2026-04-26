
import AppLogo from "./AppLogo";

export default function AppHeader({ navbar_menu }) {
  return (
    <>
      <header className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <AppLogo />
          <p>v19.2</p>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <nav className="navbar">
            {navbar_menu.map((el) => (
              <a href="#" key={el.id}>
                {el.text}
              </a>
            ))}
          </nav>
          <div className="icons d-flex flex-row justify-content-between align-items-center">
            <div><i className="bi bi-brightness-high"></i></div>
            <div><i className="bi bi-translate"></i></div>
            <div><i className="bi bi-github"></i></div>
          </div>
        </div>
      </header>
    </>
  );
}

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img src="img/logo.png" alt="" />
          </div>
          <nav className="nav">
            <a className="nav__link" href="#features_m">
              Возможности
            </a>
            <a className="nav__link" href="#pet_m">
              Питомцы
            </a>
            <a className="nav__link" href="#team">
              Волонтеры
            </a>
            <a className="nav__link" href="#testimonials">
              Отзывы
            </a>
            <a className="nav__link" href="#help">
              Помощь
            </a>
            <a className="nav__link" href="#about">
              О нас
            </a>
            <Link className="nav__link" to="/admin">
              Панель администратора
            </Link>
          </nav>

          <button className="burger" type="button">
            <span className="burger__item">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

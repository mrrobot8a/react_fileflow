import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Importa useLocation y Link
import './navbar_custom.css';

export const NavbarCustom = () => {
  const location = useLocation(); // Obtén la ubicación actual

  useEffect(() => {
    const body = document.querySelector("body");
    const sidebar = body?.querySelector("nav");
    const toggle = body?.querySelector(".toggle");
    const searchBtn = body?.querySelector(".search-box");

    toggle?.addEventListener("click", () => {
      sidebar?.classList.toggle("close");
    });

    searchBtn?.addEventListener("click", () => {
      sidebar?.classList.remove("close");
    });

    // Cleanup event listeners on unmount
    return () => {
      toggle?.removeEventListener("click", () => {
        sidebar?.classList.toggle("close");
      });
      searchBtn?.removeEventListener("click", () => {
        sidebar?.classList.remove("close");
      });
    };
  }, []);

  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image">
            <img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="image gallery" />
          </span>
          <div className="text logo-text">
            <span className="name">ICOM DIGITAL</span>
            <span className="profession">Development</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle'></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/">
                <i className='bx bx-home-alt icon'></i>
                <span className="text nav-text">Dashboard</span>
              </Link>
            </li>
            <li className={`nav-link ${location.pathname === '/add' ? 'active' : ''}`}>
              <Link to="/add">
                <i className='bx bx-bar-chart-alt-2 icon'></i>
                <span className="text nav-text">Añadir empleado</span>
              </Link>
            </li>
            <li className={`nav-link ${location.pathname === '/cronograma' ? 'active' : ''}`}>
              <Link to="/cronograma">
                <i className='bx bx-bell icon'></i>
                <span className="text nav-text">Cronograma</span>
              </Link>
            </li>
            <li className={`nav-link ${location.pathname === '/analytics' ? 'active' : ''}`}>
              <Link to="/analytics">
                <i className='bx bx-pie-chart-alt icon'></i>
                <span className="text nav-text">Analytics</span>
              </Link>
            </li>
            <li className={`nav-link ${location.pathname === '/likes' ? 'active' : ''}`}>
              <Link to="/likes">
                <i className='bx bx-heart icon'></i>
                <span className="text nav-text">Likes</span>
              </Link>
            </li>
            <li className={`nav-link ${location.pathname === '/wallets' ? 'active' : ''}`}>
              <Link to="/wallets">
                <i className='bx bx-wallet icon'></i>
                <span className="text nav-text">Wallets</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <Link to="#">
              <i className='bx bx-log-out icon'></i>
              <span className="text nav-text">Logout</span>
            </Link>
          </li>

          <li className="mode">
            <div className="sun-moon">
              <i className='bx bx-moon icon moon'></i>
              <i className='bx bx-sun icon sun'></i>
            </div>
            <span className="mode-text text">Dark mode</span>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

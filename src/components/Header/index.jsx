import React, { useState } from 'react';
import logo from '../../img/header/logo.svg'
import { Link } from "react-router-dom";
import btnOpen from '../../img/icons/nav-open.svg'
import btnClose from '../../img/icons/nav-close.svg'

export const Header = () => {
	const [open, setOpen] = useState(false)


  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">
          <a href="http://iit.dgu.ru">
            <img src={logo} alt="logo" />
          </a>

          <nav id="nav" className={!open ? 'nav' : 'nav open'}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/material" className="nav-link">
                  Материал
                </Link>
              </li>
              <li className="nav-item">
              <a href="#test" className="nav-link">
                  Тесты
                </a>
              </li>
              <li className="nav-item">
                <a href="#disciplina" className="nav-link">
                  О дисциплине
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Контакты
                </a>
              </li>
            </ul>
            <button id="nav-btn" className="nav-button" onClick={() => setOpen(!open)}>
							{!open ? (
								<img
									id="nav-btn-img"
									src={btnOpen}
									alt="Nav button"
								/>
							) : (
								<img
									id="nav-btn-img"
									src={btnClose}
									alt="Nav button"
								/>
							)}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

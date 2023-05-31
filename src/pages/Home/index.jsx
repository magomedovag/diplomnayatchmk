import React from 'react';
import img from '../../img/header/photo.png';
import img4 from '../../img/material/4.svg'
import img5 from '../../img/material/5.svg'
import doc19 from '../../doc/podrobnee.pdf'
import { Link } from "react-router-dom";

export const Home = ({ signInGoogle }) => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-row">
            <div className="header-content" data-aos="fade-up">
              <h1 className="header-heading">
                Теоретико - числовые методы в криптографии
                <br />
              </h1>
              <button onClick={signInGoogle} className="buttonn" href="#">
                Пройти тест
              </button>
            </div>

            <div className="header-img" data-aos="fade-left">
              <img src={img} width="560" height="500" alt="crypto" />
            </div>
          </div>
        </div>
      </div>
      <section className="services">
        <div className="container">
          <div className="services-row">
            <div className="service-card" data-aos="fade-down">
              <img
                className="service-card-img"
                src={img4}
                alt="material"
              />
              <h3 className="service-card-title">
                <Link to='/material'>Материалы</Link>
              </h3>
              <p>
                Материал составлен на основе лекций преподавателя кафедры ИТиБКС
                Муртузалиевой А.А.
              </p>
            </div>

            <div className="service-card" data-aos="fade-down">
              <img
                className="service-card-img"
                src={img5}
                alt="test"
              />
              <h3 className="service-card-title">
                <Link to="/material">Тесты</Link>
              </h3>
              <p>
                Тест предназначен для закрепления теоретического материала по
                дисциплине “Теоретико - числовые методы в криптографии.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id = "disciplina" className="portfolio">
        <div className="container">
          <div className="portfolio-title">
            <h2 className="title-1">О дисциплине</h2>
          </div>

          <div className="project" data-aos="flip-up">
            <p>
              Дисциплина «Теоретико – числовые методы в криптографии»
              обеспечивает приобретение знаний по математическим основам
              криптографической защиты информации. Целью препода­вания
              дисциплины «Теоретико – числовые методы в криптографии» является
              изложение базовых принципов построения и математического
              обоснования криптографических систем.
            </p>
            <a className="btn1" href={doc19}>
              Подробнее
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

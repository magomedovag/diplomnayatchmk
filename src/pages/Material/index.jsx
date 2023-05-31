import React from 'react';
import img from '../../img/header/photo2.png';
import img6 from '../../img/material/6.svg'
import img7 from '../../img/material/7.svg'
import doc1 from '../../doc/first.pdf'
import doc2 from '../../doc/2_Наибольший_общий_делитель_и_наименьшее_общее_кратное.pdf'
import doc3 from '../../doc/3.pdf'
import doc4 from '../../doc/4.pdf'
import doc5 from '../../doc/5.pdf'
import doc6 from '../../doc/6.pdf'
import doc7 from '../../doc/7.pdf'
import doc8 from '../../doc/8.pdf'
import doc9 from '../../doc/9.pdf'
import doc10 from '../../doc/10.pdf'
import doc11 from '../../doc/11.pdf'
import doc12 from '../../doc/12.pdf'
import doc13 from '../../doc/13.pdf'
import doc14 from '../../doc/14.pdf'
import doc15 from '../../doc/15.pdf'
import doc16 from '../../doc/16.pdf'
import doc17 from '../../doc/17.pdf'
import doc18 from '../../doc/18.pdf'
// import doc19 from '../../doc/20201027-p35.pdf'

export const Material = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-row">
            <div className="header-content" data-aos="fade-up">
              <p className="header-heading22">
                Учебное пособие содержит полное изложение материала учебной
                дисциплины «Теоретико-числовые методы в криптографии»
                Государственного образовательного стандарта высшего
                профессионального образования по направлению подготовки
                «Информационная безопасность». Предназначено для студентов вузов,
                обучающихся по направлениям подготовки в области информационной
                безопасности, а , также для аспирантов.
              </p>
            </div>

            <div className="header-img" data-aos="fade-left">
              <img src={img} width="450" height="450" alt="crypto" />
            </div>
          </div>
        </div>
      </header>
      <section className="services">
        <div className="container">
          <div className="portfolio-title" data-aos="fade-down">
            <h1 className="title-1">Тесты</h1>
          </div>
          <div className="services-row">
            <div className="service-card" data-aos="fade-down">
              <img
                className="service-card-img"
                src={img7}
                alt="material"
              />
              <h3 className="service-card-title">
                <a href="https://obrazovaka.ru/test/algoritm-evklida-shema-9-klass.html">
                  Алгоритмы Евклида
                </a>
              </h3>
              <p>
                Алгоритм нахождения НОД делением, расширенный, бинарный и
                расширеный бинарный алгорит Евклида
              </p>
            </div>

            <div className="service-card" data-aos="fade-down">
              <img
                className="service-card-img"
                src={img6}
                alt="test"
              />
              <h3 className="service-card-title">
                <a href="https://silvertests.ru/TagView.aspx?id=155">
                  Функция Эйлера
                </a>
              </h3>
              <p>Мультипликативная арифметическая функция</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <div className="portfolio-title">
            <h2 className="title-1">Лекции</h2>
          </div>
          <div className="service-description">
            <div className="project" data-aos="flip-up">
              <a href={doc1}>
                <li>Делимость в кольце целых чисел</li>
              </a>
              <a href={doc2}>
                <li>Наибольший общий делитель и наименьшее общее кратное</li>
              </a>
              <a href={doc3}>
                <li>Алгоритмы Евклида</li>
              </a>
              <a href={doc4}>
                <li>Простые числа</li>
              </a>
              <a href={doc5}>
                <li>Отношение сравнимости</li>
              </a>
              <a href={doc6}>
                <li>Функция Эйлера</li>
              </a>
              <a href={doc7}>
                <li>Решение сравнений первой степени</li>
              </a>
              <a href={doc8}>
                <li>Сравнения второй степени</li>
              </a>
              <a href={doc9}>
                <li>Символ Якоби</li>
              </a>
              <a href={doc10}>
                <li>Способы решения сравнения второй степени</li>
              </a>
            </div>

            <div className="project-p" data-aos="flip-up">
              <a href={doc11}>
                <li>
                  {' '}
                  Способы решения сравнения второй степени по составному модулю
                </li>
              </a>
              <a href={doc12}>
                <li>Непрерывные дроби </li>
              </a>
              <a href={doc13}>
                <li>Квадратичные иррациональности</li>
              </a>
              <a href={doc14}>
                <li>Простейшие ДУиСПС</li>
              </a>
              <a href={doc15}>
                <li>Разложение функций в непрерывные дроби</li>
              </a>
              <a href={doc16}>
                <li>Проверка чисел на простоту Тест Ферма</li>
              </a>
              <a href={doc17}>
                <li>Тесты Соловэя - Штрассена</li>
              </a>
              <a href={doc18}>
                <li>Детерминированные алгоритмы проверки чисел на простоту</li>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React from 'react';
import tg from '../../img/socials/telegram.svg'
import inst from '../../img/socials/inst.svg'
import vk from '../../img/socials/vk.svg'

export const Footer = () => {
  return (
    <footer className="contacts">
      <div className="container">
        <div className="contacts-title">
          <h2 className="title-1">Контакты</h2>
        </div>
        <div className="contacts-content" data-aos="fade-down">
          <p>
            Возникли вопросы?
            <br /> Свяжитесь с нами
          </p>
        </div>
        <div className="contacts-button" data-aos="fade-down">
          <a href="#!" className="btn">
            Задать вопрос
          </a>
        </div>
        <div className="contacts-social" data-aos="zoom-in">
          <a href="https://t.me/it_dsu">
            <img src={tg} alt="telegram" />
          </a>
          <a href="https://instagram.com/itdsu?igshid=YmMyMTA2M2Y=">
            <img src={inst} alt="Instargam" />
          </a>
          <a href="https://vk.com/it_dsu">
            <img src={vk} alt="vk" />
          </a>
        </div>
        <div className="contacts-footer" data-aos="fade-up">
          <p>Все права защищены, 2022</p>
        </div>
      </div>
    </footer>
  );
};

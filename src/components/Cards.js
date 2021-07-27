import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
// import Image from './images/img-1.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Our school takes a whole child approach to develop well rounded citizens.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src="/react-template/images/img-1.jpg"
            text="Our school's mission is to bring quality education to all students no matter their background."
            label="Mission"
            path="/services"
            />
            <CardItem 
            src="/react-template/images/img-2.jpg"
            text="We offer a wide variety of extracurricular activities to allow students to explore their talents."
            label="Extracurricular"
            path="/services"
            />
            <CardItem 
            src="/react-template/images/img-3.jpg"
            text="We are following all state Public Health guidelines.  We are also aligning to district policies."
            label="Covid-19 Updates"
            path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

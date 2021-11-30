import React, { useState } from 'react';
import Project1 from '../img/food.jpeg';
import Project2 from '../img/mine-start.jpeg';
import Project3 from '../img/dice.jpeg';
import Project4 from '../img/portfolio-4.jpg';

import '..//css/Portfolio.css';

function Project(props) {
  const [display, setDisplay] = useState('notdisplayed');
  const showButton = (e) => {
    e.preventDefault();
    setDisplay('displayed');
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay('notdisplayed');
  };

  return (
    <div
      className='col__3'
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <div className='project__box pointer relative'>
        <div className='project__box__img pointer relative'>
          <div className='project__img__box'>
            <img src={props.id} alt='' className='project__img' />
          </div>
          <div className='mask__effect'></div>
        </div>
        <div className={display}>
          <div className='project__meta absolute '>
            <h4 className='project__text'>Nutrition Tracking</h4>

            <a
              href='https://pedantic-easley-e3b479.netlify.app/'
              target='_blank'
              className='project__btn'
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

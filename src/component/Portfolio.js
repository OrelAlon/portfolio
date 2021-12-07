import React from 'react';

import Project from './project';

import '..//css/Portfolio.css';
import Project1 from '../img/food.png';
import Project2 from '../img/mine.png';
import Project3 from '../img/dice.png';
import Project4 from '../img/portfolio-4.jpg';

function Portfolio() {
  return (
    <div className='project component__space' id='Portfolio'>
      <div className='heading'>
        <h1 className='heading'>Some Of My Project's... </h1>
        {/* <p className='heading p__color'>
          There are many variations of passages of Lorem Ipsum available
        </p> */}
      </div>
      <div className='container'>
        <div className='row'>
          <Project
            id={Project1}
            href='https://pedantic-easley-e3b479.netlify.app/'
            git='https://github.com/OrelAlon/Weekly_nutrition_diary'
            name='Nutrition Tracking'
          />
          <Project
            id={Project2}
            href='https://cocky-dijkstra-a469d1.netlify.app/'
            git='https://github.com/OrelAlon/Minecraft-2D-Game'
            name='Minecraft'
          />
          <Project
            id={Project3}
            href='https://awesome-turing-93446d.netlify.app/'
            git='https://github.com/OrelAlon/Dice-Game'
            name='Dice-Game'
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

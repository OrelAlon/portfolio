import React from "react";

import Project from "./project";

import "..//css/Portfolio.css";
import Project1 from "../img/food.png";
import Project2 from "../img/mine.png";
import Project3 from "../img/dice.png";
import Project4 from "../img/finder2.png";
import Project5 from "../img/booking2.png";
import Project6 from "../img/youtube.png";

// https://www.befunky.com/create/
// 950px width

function Portfolio() {
  return (
    <div className='project component__space' id='Portfolio'>
      <div className='heading'>
        <h1 className='heading'>Some Of My Project's... </h1>
      </div>
      <div className='container'>
        <div className='row'>
          <Project
            id={Project5}
            // href='https://booking-orel-app.herokuapp.com/'
            git='https://github.com/OrelAlon/booking-app'
            name='Booking-Clone'
          />

          <Project
            id={Project1}
            href='https://nutrition-tracking-app.netlify.app/'
            git='https://github.com/OrelAlon/nutrition-app'
            name='Nutrition Tracking'
          />
          <Project
            id={Project6}
            href='https://warm-lokum-db00fa.netlify.app/'
            git='https://github.com/OrelAlon/youtube-demo-app'
            name='youtube-Demo-app'
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
          <Project
            id={Project4}
            href='https://github-finder-umber.vercel.app/'
            git='https://github.com/OrelAlon/github-finder'
            name='Github-Finder'
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

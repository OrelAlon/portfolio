import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "..//css/Portfolio.css";
import food from "../img/food.png";
import mine from "../img/mine.png";
import dice from "../img/dice.png";
import foodbook from "../img/foodbook.png";
import Project from "./project";

// https://www.befunky.com/create/
// 950px width

function Portfolio() {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  const portfolios = [
    {
      id: 1,
      src: food,
      demo: "https://nutrition-tracking-app.netlify.app/",
      code: "https://github.com/OrelAlon/nutrition-app",
      stack: "ReactJS",
      story: "Calculate your BMR and keep track of what you ate ",
    },
    {
      id: 2,
      src: foodbook,
      demo: "https://orel-foodbook-app.herokuapp.com/login",
      code: "https://github.com/OrelAlon/booking-app",
      stack: "mern - stack",
      story: "Sharing photos of food from restaurants",
    },
    {
      id: 3,
      src: dice,
      demo: "https://awesome-turing-93446d.netlify.app/",
      code: "https://github.com/OrelAlon/Dice-Game",
      stack: "ReactJS",
      story: "Easy dice game for 2 players",
    },
    {
      id: 4,
      src: mine,
      demo: "https://cocky-dijkstra-a469d1.netlify.app/",
      code: "https://github.com/OrelAlon/Minecraft-2D-Game",
      stack: "Vanilla JavaScript",
      story: "Minecraft game created with matrix",
    },
  ];

  return (
    <div className='project component__space' id='Portfolio'>
      <div className='heading'>
        <h1 className='heading'>Some Of My Project's... </h1>
      </div>
      <div className='container'>
        <div className='row margin-p'>
          {portfolios.map(({ id, src, demo, code, stack, story }) => (
            <>
              {" "}
              <Project key={id} obj={{ id, src, demo, code, stack, story }} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

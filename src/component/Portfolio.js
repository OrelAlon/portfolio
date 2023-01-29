import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "..//css/Portfolio.css";
import food from "../img/food.png";
import mine from "../img/mine.png";
import dice from "../img/dice.png";
import todo from "../img/todo.png";
import Project from "./project";

import foodbook from "../img/foodbook.png";

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
      name: "Nutrition-app",

      stack: ["react", "js", "external API"],
      story: "Calculate your BMR and keep track of what you ate ",
    },
    {
      id: 2,
      src: foodbook,
      demo: "https://foodbook.onrender.com/",
      code: "https://github.com/OrelAlon/foodbook-app",
      name: "Foodbook",

      stack: ["ReactJS", "NodeJS", "MongoDB", "Express"],
      story: "Sharing photos of dishes from restaurants",
    },
    {
      id: 3,
      src: todo,
      demo: "https://todotask-typescript-react.netlify.app/",
      code: "https://github.com/OrelAlon/typescript-app",
      name: "Todo",
      stack: ["ReactJS", "Type-Script"],
      story: "Follow up on tasks and their execution",
    },
    {
      id: 4,
      src: dice,
      demo: "https://awesome-turing-93446d.netlify.app/",
      code: "https://github.com/OrelAlon/Dice-Game",
      name: "Dice-Game",

      stack: ["ReactJS"],
      story: "Easy dice game for 2 players",
    },
    {
      id: 5,
      src: mine,
      demo: "https://cocky-dijkstra-a469d1.netlify.app/",
      code: "https://github.com/OrelAlon/Minecraft-2D-Game",
      name: "Minecraft",

      stack: ["vanilla javscript"],
      story: "Minecraft game build using matrix",
    },
  ];

  return (
    <div className='project component__space' id='Portfolio'>
      <div className='heading'>
        <h1 className='heading'>Some Of My Project's... </h1>
      </div>
      <div className='container'>
        <div className='row margin-p'>
          {portfolios.map(({ id, src, demo, code, name, stack, story }) => (
            <>
              {" "}
              <Project
                key={id}
                obj={{ id, src, demo, code, name, stack, story }}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

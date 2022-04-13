import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "..//css/Portfolio.css";

function Project(props) {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  return (
    <div
      className="col__3"
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <div className="project__box pointer relative">
        <div className="project__box__img pointer relative">
          <div className="project__img__box">
            <img src={props.id} alt="" className="project__img" />
          </div>
          <div className="mask__effect"></div>
        </div>
        <div className={display}>
          <div className="project__meta absolute ">
            <h5 className="project__text">{props.name}</h5>
            <div>
              <a href={props.git} target="_blank">
                <FontAwesomeIcon icon={faGithub} className="iconPro" />
              </a>
              <a href={props.href} target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="iconPro" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

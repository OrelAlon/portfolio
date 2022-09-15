import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "../css/Portfolio.css";

const Project = ({ obj }) => {
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
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
      className='project__box pointer relative'
    >
      <div className='project__box__img pointer relative'>
        <div className='project__img__box'>
          <img src={obj.src} alt='' className='project__img' />
        </div>
        <div className='mask__effect'></div>
      </div>
      <div className={display}>
        <div className='project__meta absolute '>
          <h5 className='project__stack'>{obj.stack}</h5>
          <p className='project__text'>{obj.story}</p>
          <div>
            <a href={obj.code} target='_blank'>
              <FontAwesomeIcon icon={faGithub} className='iconPro' />
            </a>
            <a href={obj.demo} target='_blank'>
              <FontAwesomeIcon icon={faExternalLinkAlt} className='iconPro' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

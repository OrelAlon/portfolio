import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "../css/Portfolio.css";

const Project = ({ obj }) => {
  const [display, setDisplay] = useState("notdisplayed");
  const [stack, setStack] = useState([]);

  useEffect(() => {
    setStack(obj.stack);
    console.log(stack);
    console.log(obj.stack);
  }, [obj]);

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
      class='flip-card'
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
    >
      <div class='flip-card-inner'>
        <div class='flip-card-front'>
          <img src={obj.src} alt='Avatar' />
        </div>
        <div class='flip-card-back'>
          <div className='card-text inner'>
            <h1>{obj.name}</h1>
            <p>{obj.story}</p>
            <div className='stack-div'>
              <ul>
                {obj.stack.map((s) => (
                  <li className='stack-list'>{s}</li>
                ))}
              </ul>
            </div>
          </div>
          <a href={obj.code} target='_blank'>
            <FontAwesomeIcon icon={faGithub} className='iconPro' />
          </a>
          <a href={obj.demo} target='_blank'>
            {/* <FontAwesomeIcon icon='fa-solid fa-globe' className='iconPro' /> */}
            <FontAwesomeIcon icon={faGlobe} className='iconPro' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

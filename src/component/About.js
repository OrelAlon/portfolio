import "../css/About.css";
import { Link } from "react-scroll";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import ubuntu from "../assets/ubuntu.png";
import vscode from "../assets/vscode.png";

const About = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "orange",
      herf: "https://html.com/",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "blue",

      herf: " https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "Java Script",
      style: "yellow",
      herf: "https://www.javascript.com/",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDB",
      style: "green",
      herf: "https://www.mongodb.com/",
    },
    {
      id: 5,
      src: ubuntu,
      title: "Ubuntu",
      style: "orange",
      herf: "https://ubuntu.com/",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "green",
      herf: "https://nodejs.org/en/",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "blue",
      herf: "https://reactjs.org/",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "white",
      herf: "https://github.com/",
    },
    {
      id: 9,
      src: vscode,
      title: "Visual Code",
      style: "blue",
      herf: "https://code.visualstudio.com/",
    },
  ];

  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className='about component__space' id='About'>
      <div className='container'>
        <div className='row'>
          {/* <div className='col__2'>
            <img src={aboutImg} alt='' className='about__img' />
          </div> */}
          <div className='col__2'>
            <h1 className='about__heading'>About Me</h1>
            <div className='about__meta'>
              {/*  */}
              <p className='about__text p__color'>
                As a recent graduate of the “Appleseeds Academy” Full Stack
                Developer Bootcamp, I am constantly seeking new ways to expand
                my skills and knowledge. I am passionate about using code to
                solve problems and am eager to work with a team of talented
                programmers to continue learning and growing as a developer. In
                my free time, I enjoy exploring new technologies and frameworks
                that spark my curiosity
              </p>

              <h5 className='my-skills'>My Skills</h5>
              <div className='grid-container'>
                {/* techs */}
                {techs.map(({ id, src, title, style, herf }) => (
                  <a
                    key={id}
                    className={`tech-stack ${style}`}
                    href={herf}
                    target='_blank'
                  >
                    <img src={src} alt='' className='tech-icon' />
                    <p className='icon-title'>{title}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className='up__to__top__btn'>
        <Link
          to='home'
          smooth={true}
          duration={1000}
          className='bottom__to__top'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-chevron-up white-text'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default About;

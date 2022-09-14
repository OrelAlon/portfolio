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

// import aboutImg from './img/about.jpg';
const About = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "orange",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "blue",
    },
    {
      id: 3,
      src: javascript,
      title: "Java Script",
      style: "yellow",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDB",
      style: "green",
    },
    {
      id: 5,
      src: ubuntu,
      title: "Ubuntu",
      style: "orange",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "green",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "blue",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "white",
    },
    {
      id: 9,
      src: vscode,
      title: "Visual Code",
      style: "blue",
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
                I'm a Web Developer with a focus on the MERN Stack, still
                exploring other technologies and frameworks that catch my
                interest! Recently, I graduated from the AppleSeeds Full-Stack
                Bootcamp. I am passionate about coding and solving problems
                through code, and I am excited to work alongside other amazing
                programmers and learn so much more!
              </p>
              <h5 className='my-skills'>My Skills</h5>
              <div className='grid-container'>
                {/* techs */}
                {techs.map(({ id, src, title, style }) => (
                  <div key={id} className={`tech-stack ${style}`}>
                    <img src={src} alt='' className='tech-icon' />
                    {/* <p className='icon-title'>{title}</p> */}
                  </div>
                ))}

                {/* cv button */}
              </div>
              <div className='about__button d__flex align__items__center'>
                <a
                  href='https://drive.google.com/file/d/1fonIgvZOaq02GsOI4SGhzEW3EsOkmN5U/view?usp=sharing'
                  target='_blank'
                >
                  <div class='btn-container'>
                    <button class='btn-6'>
                      <span>Download Cv</span>
                    </button>
                  </div>
                </a>
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
            className='bi bi-chevron-up white'
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

import { useState } from "react";
import logo from "../img/logo.png";
import me from "../img/me.jpg";
import { Link } from "react-scroll";

import "../css/Home.css";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(true);
  return (
    <div className='home' id='Home'>
      <div className='home__bg'>
        <div className='header d__flex align__items__center pxy__30 test'>
          <div className='navigation pxy__30'>
            <ul className='navbar d__flex '>
              <Link to='Home' smooth={true} duration={1000}>
                <div className='svg-wrapper nav__items mx__15'>
                  <svg
                    height='60'
                    width='320'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect className='shape' height='60' width='220' />
                  </svg>
                  <div className='text'>Home</div>
                </div>{" "}
              </Link>
              <Link to='About' smooth={true} duration={1000}>
                <div className='svg-wrapper'>
                  <svg
                    height='60'
                    width='320'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect className='shape' height='60' width='220' />
                  </svg>
                  <div className='text'>About</div>
                </div>{" "}
              </Link>
              <Link to='Portfolio' smooth={true} duration={1000}>
                <div className='svg-wrapper'>
                  <svg
                    height='60'
                    width='320'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect className='shape' height='60' width='220' />
                  </svg>
                  <div className='text'>Portfolio</div>
                </div>{" "}
              </Link>
              <Link to='Contact' smooth={true} duration={1000}>
                <div className='svg-wrapper'>
                  <svg
                    height='60'
                    width='320'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect className='shape' height='60' width='220' />
                  </svg>
                  <div className='text'>Contact</div>
                </div>{" "}
              </Link>
            </ul>
          </div>
          <div>
            <Link
              to='Home'
              smooth={true}
              duration={1000}
              className='logo-right'
            >
              <div className='logo'>
                <img src={logo} alt='' />
              </div>
            </Link>
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className='container-home'>
          <div className='home__meta typewriter'>
            <h1 className='home__text pz__10' id='ani'>
              WELCOME
            </h1>
            <h4 className='home__text pz__10'> I’m Orel Alon,</h4>
            <h3 className='home__text sweet pz__10'>Full Stack Developer.</h3>
            {/* <h4 className='home__text pz__10'>From Israel.</h4> */}
          </div>

          <div className='profile-img-div'>
            <img className='profile-img' src={me} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

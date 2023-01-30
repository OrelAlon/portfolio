import { useState } from "react";
import logo from "../img/logo.png";
import me from "../img/me.jpg";
import { Link } from "react-scroll";

import "../css/Home.css";

function Home() {
  // fixed Header
  //
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
          <div className='home__meta typewriter '>
            <h5 className='bold-font fixit'> I’m Orel Alon,</h5>
            <h5 className='red-color bold-font fixit'>Full Stack Developer</h5>

            <h5 className='margin-space fixit'>
              {" "}
              My focus is on the MERN-STACK
            </h5>
            <h5 className='fixit red-color'>
              {" "}
              and I am passionate about coding
            </h5>
            {/* <p>
              <span>Final/Blinking Line</span> <span>|</span>
            </p> */}
          </div>

          <div className='profile-img-div'>
            <img className='profile-img' src={me} />
          </div>
          {/* cv button */}
          <div className='about__button d__flex align__items__center cv-btn disphone'>
            <a
              href='https://drive.google.com/file/d/1aMqqF4EBkX0yxGMIkduXb5mzvA5mNDwV/view?usp=sharing'
              target='_blank'
            >
              <div class='btn-container'>
                <button class='btn-6'>
                  <span>Download Cv</span>
                </button>
              </div>
            </a>
          </div>
          {/* end cv */}
        </div>
      </div>
    </div>
  );
}

export default Home;

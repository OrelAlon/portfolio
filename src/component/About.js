import React from 'react';
import '../css/About.css';
// import aboutImg from './img/about.jpg';
function About() {
  //  Up To Top Btn
  window.addEventListener('scroll', function () {
    const upToTop = document.querySelector('a.bottom__to__top');
    upToTop.classList.toggle('active', window.scrollY > 0);
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
              <p className='about__text p__color'>
                I'm a web developer with a focus on the MERN stack, but still
                exploring other technologies and frameworks that catch my
                interest! Recently, I graduated from the AppleSeeds Full-Stack
                Bootcamp. I am passionate about coding and solving problems
                through code, and I am excited to work alongside other amazing
                programmers and learn so much more!
              </p>
              ​
              <div className='about__button d__flex align__items__center'>
                <a href='https://drive.google.com/file/d/17M3mIrE9p2Fia-WK9_MxSS4lZhnhsXY4/view?usp=sharing'>
                  <button className='about btn pointer'>Download Cv</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className='up__to__top__btn'>
        <a href='#' className='bottom__to__top'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-up white'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;

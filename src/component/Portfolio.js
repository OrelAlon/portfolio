import React from 'react';
import '..//css/Portfolio.css';
import Project1 from '../img/food.jpeg';
import Project2 from '../img/mine-start.jpeg';
import Project3 from '../img/dice.jpeg';
import Project4 from '../img/portfolio-4.jpg';

function Portfolio() {
  return (
    <div className='project component__space' id='Portfolio'>
      <div className='heading'>
        <h1 className='heading'>My Project</h1>
        {/* <p className='heading p__color'>
          There are many variations of passages of Lorem Ipsum available
        </p> */}
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img src={Project1} alt='' className='project__img' />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h4 className='project__text'>Nutrition Tracking</h4>
                <h5 className='project__text'>write something about it</h5>

                <a
                  href='https://pedantic-easley-e3b479.netlify.app/'
                  className='project__btn'
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img src={Project2} alt='' className='project__img' />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>2</h5>
                <h4 className='project__text'>Minecraft</h4>
                <a
                  href='https://cocky-dijkstra-a469d1.netlify.app/'
                  className='project__btn'
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img src={Project3} alt='' className='project__img' />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>3</h5>
                <h4 className='project__text'>Dice Game</h4>
                <a
                  href='https://awesome-turing-93446d.netlify.app/'
                  className='project__btn'
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img src={Project4} alt='' className='project__img' />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>Development</h5>
                <h4 className='project__text'>
                  Getting tickets to the big show
                </h4>
                <a href='#' className='project__btn'>
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='col__3'>
                <div className='project__box pointer relative'>
                  <div className='project__box__img pointer relative'>
                    <div className='project__img__box'>
                      <img src={Project4} alt='' className='project__img' />
                    </div>
                    <div className='mask__effect'></div>
                  </div>
                  <div className='project__meta absolute'>
                    <h5 className='project__text'>Development</h5>
                    <h4 className='project__text'>
                      Getting tickets to the big show
                    </h4>
                    <a href='#' className='project__btn'>
                      View Details
                    </a>
                  </div>
                </div>
              </div>

              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img src={Project3} alt='' className='project__img' />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>Development</h5>
                <h4 className='project__text'>
                  Getting tickets to the big show
                </h4>
                <a href='#' className='project__btn'>
                  View Details
                </a>
              </div>
            </div> */}
        {/* </div> */}

        {/* <div className='col__3'>
            <div className='project__box pointer relative'>
              <div className='project__box__img pointer relative'>
                <div className='project__img__box'>
                  <img src={Project4} alt='' className='project__img' />
                </div>
                <div className='mask__effect'></div>
              </div>
              <div className='project__meta absolute'>
                <h5 className='project__text'>Development</h5>
                <h4 className='project__text'>
                  Getting tickets to the big show
                </h4>
                <a href='#' className='project__btn'>
                  View Details
                </a>
              </div>
            </div>
          </div> */}

        {/* <div className='view__more__btn d__flex align__items__center justify__content__center pxy__30'>
            <button className='view__more pointer btn'>View more</button>
          </div> */}
      </div>
    </div>
  );
}

export default Portfolio;

import "../css/Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import contactImg from "./img/about-9.jpg"

function Contact() {
  return (
    <div className='contact component__space' id='Contact'>
      <div className='row'>
        <div className='col__2'>
          <div className='contact__box'>
            <div className='contact__meta'>
              <h1 className='hire__text'>Contact Me</h1>{" "}
              {/* <p className='hire__text white'>I am looking for my first job:</p> */}
              <p className='hire__text white-text'>
                <a href='tel:+972526707895'>
                  <strong>052-6707895</strong>
                </a>{" "}
                or email{" "}
                <a href='mailto:orela231089@gmail.com'>
                  <strong>orela231089@gmail.com</strong>
                </a>
              </p>
            </div>
            <div className='icons'>
              <a href='https://github.com/OrelAlon' target='_blank'>
                <FontAwesomeIcon icon={faGithub} className='icon' />
              </a>
              <a
                href='https://linkedin.com/in/orel-alon-090689184'
                target='_blank'
              >
                <FontAwesomeIcon icon={faLinkedin} className='icon' />
              </a>
              <a
                href='https://drive.google.com/file/d/1aMqqF4EBkX0yxGMIkduXb5mzvA5mNDwV/view?usp=sharing'
                target='_blank'
              >
                <FontAwesomeIcon icon={faFileAlt} className='icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='col__2'>
          {/* <img src={contactImg} alt="" className="contact__img" /> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import "../css/Sidebar.css";

const SideBar = () => {
  const links = [
    {
      id: 1,
      name: "linkedin",
      child: (
        <>
          <FaLinkedin className='social-icon' />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "github",

      child: (
        <>
          <FaGithub size={30} className='social-icon' />
        </>
      ),
      href: "https://github.com/OrelAlon",
    },
    {
      id: 3,
      name: "gmail",

      child: (
        <>
          <HiOutlineMail size={30} className='social-icon' />
        </>
      ),
      href: "orela231089@gmail.com",
    },
    {
      id: 4,
      name: "resume",

      child: (
        <>
          <BsFillPersonLinesFill size={30} className='social-icon' />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=''>
      <ul>
        {links.map(({ id, child, href, name, download }) => (
          <div key={id} className='side-bar'>
            <span
              id={name}
              href={href}
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

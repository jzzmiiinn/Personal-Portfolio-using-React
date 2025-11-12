import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
        navigate(`/${current}`); 
      }

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, navigate]);

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="logo">Yasmin's Portfolio</div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
      
      <div className="nav-content">
        <ul className="nav-links">
          <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
          <li><NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Me</NavLink></li>
        </ul>
        
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/yasmin-ali-96360a339" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/jzzmiiinn" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.instagram.com/jzzmiiinn?igsh=ZXZkM200cTFmeWUx" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://x.com/Jzzmiiinn?t=L02zZ3ANgxIO1aRAcSbr4A&s=09" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
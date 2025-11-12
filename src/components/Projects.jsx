import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      image: '/explore.jpg',
      title: 'EXPLORE ETHIOPIA',
      description:
        "A fullscreen slider showcasing Ethiopia's beauty with animated transitions, favorites, and search filtering using JavaScript and localStorage.",
    },
    {
      image: '/todo list.jpg',
      title: 'TODO LIST WITH CATEGORIES',
      description:
        'A productivity web app with nested categories, persistent local storage, and a clean, responsive UI.',
    },
    {
      image: '/countdown.jpg',
      title: 'COUNTDOWN MANAGER',
      description:
        'A countdown tracker with customizable titles and dates, built using JavaScript DOM manipulation and form validation.',
    },
    {
      image: '/calculator.jpg',
      title: 'CALCULATOR APP',
      description:
        'A simple, interactive React calculator for basic arithmetic operations with a clean, responsive design and efficient state handling.',
    },
    {
      image: '/notepad.jpg',
      title: 'NOTEPAD APP',
      description:
        'A React-based notepad for creating, editing, and deleting notes with localStorage support for data persistence and a minimalist interface.',
    },
    {
      image: '/weather.jpg',
      title: 'WEATHER APP',
      description:
        'A responsive React app that displays real-time weather data using an external API. Includes search functionality and dynamic UI updates based on current conditions.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      const newCardsPerView = window.innerWidth > 768 ? 3 : 1;
      setCardsPerView(newCardsPerView);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, projects.length - newCardsPerView)));
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, [projects.length]);  

  const maxIndex = Math.max(0, projects.length - cardsPerView);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="projects">
      <h1>PROJECTS</h1>
      <br />
      <div className="slider-container">
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous project">
          &#10094;
        </button>
        <div className="slider">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="slider-item"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}  
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide} aria-label="Next project">
          &#10095;
        </button>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
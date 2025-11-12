function ProjectCard({ title, image }) {
  return (
    <div className="cards">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default ProjectCard;
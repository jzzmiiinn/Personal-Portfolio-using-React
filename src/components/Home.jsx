function Home() {
  return (
    <section id="home">
      <div className="landing">
        <img className="circle1" src="/image.jpg" alt="Yasmin Ali" />
        <div>
          <p className="highlight">HELLO!</p>
          <p>WELCOME TO MY PORTFOLIO</p>
          <h1 className="typing">I'm <span className="highlight">Yasmin Ali</span>.</h1>
          <h2>Frontend Developer | UI/UX Designer</h2>
          <button className="about-btn"><a href="#about">ABOUT ME</a></button>
        </div>
        <img className="circle" src="/image.jpg" alt="Yasmin Ali" />
      </div>
    </section>
  );
}

export default Home;
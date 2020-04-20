import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div id="home-container">
      <h1>Project Management</h1>
      <h2>Organize your projects with this app</h2>
      
      <section id="hero-img">
      </section>      
      <h3 id="catch-phrase">Another catchy phrase here!!</h3>
      
      

      
      <div className="category-img" id="box1"></div>
      <h4 className="category-title">Organize your projects</h4>


      <div className="category-img" id="box2"></div>
      <h4 className="category-title">Add tasks for each project</h4>

      <div className="category-img" id="box3"></div>
      <h4 className="category-title">Upload files to projects folder</h4>

    </div>
  )
}

export default Home;
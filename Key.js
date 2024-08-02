import React from 'react';

function Key() {
  return (
    <div className="App">
      <header className="App-header">
        {/* The background image is set in CSS */}
        <div className="profile-background">
          <h1>Hello! I'm Harsh Sen</h1>
          <h2>And I'm a Web designer</h2>
        </div>
        <p>
          I am an aspiring web developer with a deep passion for technology and a strong drive to bring ideas to life through code. My journey began with a fascination for creating digital experiences and a desire to turn creative concepts into functional websites and applications. While I am at the beginning of my professional career, I have diligently built a solid foundation in various programming languages and frameworks. I am committed to continually learning and adapting to the ever-evolving tech landscape...
        </p>
        <div className="social-links">
          <a href="#linkedin">LinkedIn</a>
          <a href="#instagram">Instagram</a>
          <a href="#github">GitHub</a>
          <a href="#twitter">Twitter</a>
        </div>
        <button className="download-btn">Download CV</button>
      </header>
    </div>
  );
}

export default Key;

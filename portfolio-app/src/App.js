import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Rachana Prabhu Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <img src="/piccc.jpg" alt="Profile" className="profile-picture" />
        <h2>Hello, I'm Rachana Prabhu</h2>
        <p>B.E in Artificial Intelligence and Data Science</p>
        <p>
          "With knowledge and skills in AI and Data Science, I aim to succeed in 
          an environment of growth and excellence, achieving personal and organizational goals."
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <h3>Education</h3>
        <ul>
          <li>B.E in Artificial Intelligence and Data Science - CGPA: 7.9</li>
          <li>Pre-University College - 82.83%</li>
          <li>SSLC - 88.48%</li>
        </ul>
        <h3>Internship</h3>
        <p>
          Full-Stack Web Development Intern (MERN Stack) at CESL Academics.
          Gained hands-on experience in front-end and back-end development.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <ul>
          <li>Programming: Python, C, Java, C++</li>
          <li>AI: Machine Learning, Neural Networks</li>
          <li>Web Development: HTML, CSS, Django</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Communication</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Blood Group Detection Using Image Processing:</strong>
            Simplifies blood bank operations by detecting blood groups, improving inventory management, and enhancing accuracy.
          </li>
          <li>
            <strong>Personal Task Manager:</strong>
            A web application for managing daily tasks with features to add, edit, delete, and track tasks.
          </li>
          <li>
            <strong>Hangman Game:</strong>
            A Python-based game that improves programming skills using loops, conditionals, and list operations.
          </li>
        </ul>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="hobbies">
        <h2>Hobbies & Activities</h2>
        <ul>
          <li>Cooking</li>
          <li>Singing</li>
          <li>Art</li>
          <li>Member of Environmental Club</li>
          <li>Member of NSS</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email: prabhurachana17@gmail.com</p>
        <p>Phone: 9686519416</p>
        <p>Location: Belman, Udupi, Karnataka</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/rachana-prabhu-417966298">Visit My Profile</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;

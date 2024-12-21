import './App.css';
import profileImage from './img and gif/img1.jpg';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <img src={profileImage} alt="Andrey Ovsyanik" className="profile-image" />
        <div className="header-text">
          <h1>Andrey Ovsyanik</h1>
          <h2>Junior Frontend Developer</h2>
        </div>
      </header>


      <section className="contacts">
        <h3>Contacts</h3>
        <ul>
          <li>Email: Andreyovsyanik@example.com</li>
          <li>Phone number: +8800-555-35-35</li>
          <li>GitHub: github.com/Fryndon</li>
        </ul>
      </section>

      <section className="about">
        <h3>About Me</h3>
        <p>Motivated Frontend developer with over 3 years of experience working with React and JavaScript. Have experience in developing complex web applications and strive for continuous learning and professional growth.</p>
      </section>

      <section className="languages">
        <h3>Languages</h3>
        <ul>
          <li>Russian</li>
          <li>Belarusian</li>
          <li>English B2</li>
        </ul>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <div className="skills-list">
          <div>
            <h4>Technical Skills</h4>
            <ul>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>CSS3 / SCSS</li>
              <li>Redux</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Webpack</li>
              <li>Jest</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h4>Soft Skills</h4>
            <ul>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="experience">
        <h3>Work Experience</h3>
        <div>
          <h4>Frontend/Backend Developer</h4>
          <p>Subject: Web Programming</p>
          <ul>
            <li>Created responsive web applications using React and Redux.</li>
            <li>Optimized loading time by 30% by restructuring the core application architecture.</li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li><a href="https://fryndon.github.io/Todoist-app/" target="_blank" rel="noopener noreferrer">Todoist-app</a> - Todoist application with advanced task filtering.</li>
          <li><a href="https://fryndon.github.io/Lamoda/" target="_blank" rel="noopener noreferrer">Lamoda</a> - Online store with product filtering and sorting capabilities.</li>
          <li><a href="https://fryndon.github.io/API-SPA/" target="_blank" rel="noopener noreferrer">API-SPA</a> - Multipage application using an external API and the react-router-dom library.</li>
          <li><a href="https://fryndon.github.io/Notion-Redux/" target="_blank" rel="noopener noreferrer">Notion-Redux</a> - Utilizing Redux in the Notion application to manage state.</li>
        </ul>
      </section>

      <section className="education">
        <h3>Education</h3>
        <p>Student at BSU, Faculty of Applied Mathematics and Informatics, 2nd year</p>
      </section>

      <footer className="footer">
        <p>Contact Information: Andreyovsyanik@example.com</p>
      </footer>
    </div>
  );
};

export default App;
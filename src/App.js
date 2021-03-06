import Navbar from './components/Navbar';
import './Sass/App.scss';
import Cards from './components/Cards';
import redux from './images/redux.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="container">
          <section className="home" id="home">
            <div className="main-part">
              <div className="main-part-text">
                <h1>Felix </h1>
                <p>I am a Frontend Developer with experience in different technologies like HTML, CSS, Javascript and React.</p>
                <div className="icons">

                  <a href="https://www.linkedin.com/in/felix-edmundo-higuera-alonso-8605a9ba/"><i className="fab fa-linkedin fa-3x"></i></a>
                  <a href="https://github.com/felixhiguera"><i className="fab fa-github fa-3x" style={{ color: "black" }}></i></a>
                  <a href="https://twitter.com/edyhiguera"><i className="fab fa-twitter fa-3x"></i></a>
                </div>
              </div>
              <img src="https://res.cloudinary.com/dkctajvtu/image/upload/v1652385120/s95dqwa6jwdlr5bczf1g.jpg" alt="" />
            </div>
            <i className="fas fa-arrow-alt-circle-down fa-3x" id="aboutme"></i>
          </section>
          <section className="aboutme" >

            <div>
              <h2>About Me</h2>
              <p>My name is Felix Edmundo, I am from Mexico. <br /> I am holding a Higher diploma in I.T. I studied in CCT College in Dublin, Ireland.</p>
              <p>I have 5 years of experience as Technical Support Specialist.</p>
            </div>
            <div>
              <h2>Skills</h2>
              <div className="skills" >
                <div>
                  <i className="fab fa-html5 fa-3x"></i>
                  <p>html</p>
                </div>
                <div>
                  <i className="fab fa-css3-alt fa-3x"></i>
                  <p>css</p>
                </div>
                <div>
                  <i className="fab fa-js fa-3x"></i>
                  <p>js</p>
                </div>
                <div>
                  <i className="fab fa-react fa-3x"></i>
                  <p>React</p>
                </div>
                <div>
                  <img src={redux} alt="" />
                  <p>Redux</p>
                </div>
                <div>
                  <i className="fab fa-bootstrap fa-3x"></i>
                  <p>Bootstrap</p>
                </div>
                <div>
                  <i className="fab fa-git-alt fa-3x"></i>
                  <p>git</p>

                </div>
                <div>
                  <i className="fab fa-sass fa-3x" id="projects"></i>
                  <p>sass</p>
                </div>
              </div>
            </div>
          </section>
          <section className="projects" >
            <h2>Projects</h2>
            <Cards />

          </section>
          <section></section>

        </div>

      </main>

      <div className="footer">
        <h2>Let's stay in touch</h2>
        <div className="footer-div">

          <a href="https://www.linkedin.com/in/felix-edmundo-higuera-alonso-8605a9ba/"><i className="fab fa-linkedin fa-3x" style={{ color: "#027bfd" }}></i></a>
          <a href="https://github.com/felixhiguera"><i className="fab fa-github fa-3x" style={{ color: "black" }}></i></a>
          <a href="https://twitter.com/edyhiguera"><i className="fab fa-twitter fa-3x" style={{ color: "#027bfd" }}></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;

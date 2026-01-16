import './style.css';

import './App.css';
import Contact from './components/Contact/contact.js';
import Footer from './components/Footer/footer.js';
import Intro from './components/intro/intro.js';
import NavBar from './components/NavBar/navbar.js';
import Skill from './components/About/skill.js';
import Works from './components/Works/works.js';

function App() {
  return (
    <div >
     <NavBar/>
     <Intro/>
     <Skill/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

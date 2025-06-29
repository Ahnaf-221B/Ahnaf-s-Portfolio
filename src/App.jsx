
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  

  return (
		<>
			<div className="min-h-screen bg-gradient-to-r from-gray-300 to-gray-500">
				<Navbar></Navbar>
				<Hero></Hero>
				<About></About>
				<Education></Education>
				<Skills></Skills>
				<Projects></Projects>
				<Contact></Contact>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App

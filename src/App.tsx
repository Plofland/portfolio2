import React from 'react';
import './App.css';

//*Components
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Hero from './Components/Hero';
import DotNav from './Components/DotNav';

function App() {
	return (
		<div>
			<DotNav />
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
		</div>
	);
}

export default App;

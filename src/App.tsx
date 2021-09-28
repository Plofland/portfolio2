import React from 'react';
import './App.css';
import { GlobalStyles } from './Themes';

//*Components
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Hero from './Components/Hero';
import DotNav from './Components/DotNav';

//*Icons
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';
// import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';

// library.add(faCircle);

function App() {
	return (
		<>
			<GlobalStyles />
			<DotNav />
			<Hero />
			<About />
			<Skills />
			<Projects />
		</>
	);
}

export default App;

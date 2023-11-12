import React from 'react';
import AboutItem from './AboutItem';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center " id='about'>
			<img src="./assets/programmer.svg" className="w-3/5 h-auto md:w-1/3" />
			<AboutItem />
      <div id='skills'></div>
		</div>
	);
}

export default About;

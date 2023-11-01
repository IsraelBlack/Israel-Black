import React from 'react';
import About from './About';

function Nav() {
	return (
		<nav
			className=" fixed w-full flex justify-between px-13 p-5 
    items-center bg-white shadow-md text-blue md:font-bold  "
		>
			<a
				href="#"
				className=" text-2xl hover:underline underline-offset-2  md:text-4xl "
			>
				{/* TODO click to top of page, style */}
				Israel Black
			</a>
			<ul className=" space-x-5 text-lg md:text-2xl  ">
				<a href="#" className="hover:underline hover:text-orange">
					{/* click to about section */}
					About
				</a>
				<a href="" className="hover:underline hover:text-orange">
					{/* click to skills section */}
					Skills
				</a>
				<a href="#" className="hover:underline hover:text-orange">
					{/* click to projects section */}
					Projects
				</a>
			</ul>
		</nav>
	);
}

export default Nav;

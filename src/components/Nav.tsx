import React from 'react';

function Nav() {
	return (
		<nav className=" fixed w-full flex justify-between px-13 p-5 items-center bg-white shadow-md text-blue md:font-bold   ">
			<a
				href="#"
				className=" text-2xl hover:underline underline-offset-2 md:text-4xl"
			>
				{/* TODO click to top of page, style */}
				Israel Black
			</a>
			<ul className=" space-x-5 text-lg md:text-2xl">
				<a href="#">About</a>
				<a href="#">Skill</a>
				<a href="#">Projects</a>
			</ul>
		</nav>
	);
}

export default Nav;

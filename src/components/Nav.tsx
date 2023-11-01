import React from 'react';

function Nav() {
	return (
		<nav className=" flex justify-between px-13 p-5 items-center bg-white border-b-2 border-solid border-black text-blue text-sm">
			<a href="#" className=" text-2xl  md: hover:underline underline-offset-2">
				{/* TODO click to top of page, style */}
				Israel Black
			</a>
			<ul className=" space-x-5">
				<a>About</a>
				<a>Skill</a>
				<a>Projects</a>
			</ul>
		</nav>
	);
}

export default Nav;

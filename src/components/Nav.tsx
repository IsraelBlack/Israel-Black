import React from 'react';

function Nav() {
	return (
		<nav className=" flex justify-between px-9 p-5 items-center bg-white border-b-2 border-solid border-black text-blue text-sm">
			<a href="#" className=" text-xl  md: hover:underline underline-offset-2">
				{/* TODO click to top of page, style */}
				Israel Black
			</a>
			<a className=" ">About</a>
			<a>Skill</a>
			<a>Projects</a>
		</nav>
	);
}

export default Nav;

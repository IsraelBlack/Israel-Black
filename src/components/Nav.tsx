import React from 'react';

function Nav() {
	return (
		<nav className="flex justify-between px-20 py-10 items-center bg-white font-inter">
			<a
				href="#"
				className="text-blue-600 text-xl hover:underline underline-offset-2"
			>
				{/* TODO click to top of page, style */}
				Israel Black
			</a>
      <a>About</a>
      <a>Skill</a>
      <a>Projects</a>
		</nav>
	);
}

export default Nav;

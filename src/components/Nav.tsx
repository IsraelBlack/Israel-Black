
function Nav() {
	return (
		<nav
			className=" sticky top-0 w-full flex flex-row z-50 justify-between px-13 p-5 
    items-center bg-white shadow-md text-greenDark md:font-bold  "
		>
			<a
				href="#"
				className=" text-2xl hover:underline underline-offset-2  md:text-4xl "
			>
				{/* TODO click to top of page, style */}
				Israel Black
			</a>
			<ul className=" space-x-5 text-lg md:text-2xl  ">
				<a href="/About#about" className="hover:underline hover:text-orange">
					{/* click to about section */}
					About
				</a>

				<a href="/About#skills" className="hover:underline hover:text-orange">
					{/* click to skills section */}
					Skills
				</a>

				<a
					href="/Skills#projects"
					className="hover:underline hover:text-orange"
				>
					{/* click to projects section */}
					Projects
				</a>
			</ul>
		</nav>
	);
}

export default Nav;

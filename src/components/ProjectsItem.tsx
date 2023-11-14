

interface Props {
	title: string;
	imgUrl: string;
	stack: string[];
	link: string;
}

function ProjectItem({ title, imgUrl, stack, link }: Props) {
	return (
		<div className="border-2 border-white shadow-2xl rounded-md overflow-hidden justify-center bg-white">
			<img
				src={imgUrl}
				alt="project"
				className="w-full h-36 md:h-48 object-cover cursor-pointer"
			/>
			<div className="w-full p-4">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
					{title}
				</h3>
				<p className="flex flex-wrap gap-2 flex-row items-left justify-left text-sm md:text-base">
					{stack.map((item) => (
						<span className="inline-block px-2 py-1  font-semibold border-2 border- rounded-md">
							{item}
						</span>
					))}
				</p>
				<a
					href={link}
					className="inline-block border-2 border-greenDark rounded-md mt-2 px-1 md:p-2 bg-greenLight text-whiteLight md:text-lg"
				>
					Check it Out
				</a>
			</div>
		</div>
	);
}

export default ProjectItem;

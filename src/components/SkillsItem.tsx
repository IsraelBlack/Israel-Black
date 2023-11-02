import React from 'react';

interface Props {
	title: string;
	imgUrl: string;
	description: string;
	stack: string[];
	link: string;
}

function SkillsItem({ title, imgUrl, description, stack, link }: Props) {
	return (
		<div className="border-2 rounded-md overflow-hidden justify-center ">
			<img
				src={imgUrl}
				alt="portfolio"
				className="w-full h-36 md:h-48 object-cover cursor-pointer"
			/>
			<div className="w-full p-4">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
					{title}
				</h3>
				<p className="flex flex-wrap gap-2 flex-row items-center just text-xs md:text-sm w-41">
					{description}
				</p>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-center text-sm md:text-base">
					{stack.map((item) => (
						<span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
							{item}
						</span>
					))}
				</p>
				<a href={link}>Check it Out</a>
			</div>
		</div>
	);
}

export default SkillsItem;

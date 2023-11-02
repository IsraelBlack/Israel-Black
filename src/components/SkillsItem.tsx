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
		<div>
			<img
				src={imgUrl}
				alt="portfolio"
				className="w-full h-36 md:h-48 object-cover cursor-pointer"
			/>
			<div className="w-full p-4">
				<h3>{title}</h3>
				<p>{description}</p>
				<p>
					{stack.map((item) => (
						<span>{item}</span>
					))}
				</p>
				<a href={link}>Check it Out</a>
			</div>
		</div>
	);
}

export default SkillsItem;

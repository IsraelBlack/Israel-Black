import React from 'react';

interface Props {
	imgUrl: string;
}

function SkillsItem({ imgUrl }: Props) {
	return (
		<div className="border border-white rounded-lg shadow-2xl justify-center bg-white">
			<img src={imgUrl} alt="skills" className="w-44" />
		</div>
	);
}

export default SkillsItem;

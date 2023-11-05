import React from 'react';
import skills from '../data/skills';
import SkillsItem from './SkillItem';

function Skills() {
	return (
		<div className="flex flex-col items-center justify-center px-5 m-10">
			<h1 className="text-lg md:text-2xl font-bold p-5">Top Skills</h1>
			<div className="flex md:flex-row ">
				<div className='grid gridcols-2 md:grid-cols-3 gap-4'>
					{skills.map((skills) => (
						<SkillsItem imgUrl={skills.imgUrl} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Skills;

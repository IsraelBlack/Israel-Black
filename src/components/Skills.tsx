import React from 'react';
import skills from '../data/skills';
import SkillsItem from './SkillsItem';

function Skills() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center px-5">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{skills.map((project) => (
					<SkillsItem
						imgUrl={project.imgUrl}
						title={project.title}
						description={project.description}
						stack={project.stack}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
}

export default Skills;

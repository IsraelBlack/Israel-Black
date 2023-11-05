import React from 'react';
import projects from '../data/projects.ts';
import ProjectsItem from './ProjectsItem';

function Projects() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center px-5 m-10">
      <h1>Projects</h1> {/* Resize section Head */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project) => (
					<ProjectsItem
						imgUrl={project.imgUrl}
						title={project.title}
						stack={project.stack}
						link={project.link}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;

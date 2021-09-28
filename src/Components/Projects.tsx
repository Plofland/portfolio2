import React from 'react';
import styled from 'styled-components';
// import projectsList from '../projectsList'
// import ProjectCard from './ProjectCard';

// interface ProjectState = {

// }

export default function Projects() {
	return (
		<StyledProjects id="projects">
			<SectionTitle>Projects</SectionTitle>
			{/* <ProjectsContainer>
				{projectsList.map((project) => {
					return (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					);
				})}
			</ProjectsContainer> */}
		</StyledProjects>
	);
}

const StyledProjects = styled.div`
	display: flex;
	height: 100vh;
	padding: 2rem;
	background-color: blue;
`;

const SectionTitle = styled.div`
	font-size: 3rem;
`;
// const ProjectsContainer = styled.div`
// 	display: flex;
// `;

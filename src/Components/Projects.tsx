import React from 'react';
import styled from 'styled-components';
import projectsList from '../projectsList'
import ProjectCard from './ProjectCard';
import { IProject } from './Interfaces';

export default function Projects() {

	return (
		<ProjectsSection id="projects">
			<SectionTitle>Projects</SectionTitle>
			<ProjectsContainer>
				{projectsList.map((project: IProject, key: number) => {
					return (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					);
				})}
			</ProjectsContainer>
		</ProjectsSection>
	);
}

const ProjectsSection = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
	padding: 2rem;
	background-color: blue;
`;

const SectionTitle = styled.div`
	font-size: 3rem;
`;

const ProjectsContainer = styled.div`
	display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

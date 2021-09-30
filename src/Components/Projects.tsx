import React from 'react';
import styled from 'styled-components';
import projectsList from '../projectsList'
import ProjectCard from './ProjectCard';
import { IProject } from './Interfaces';

export default function Projects() {

    // let options = {
    //     root: document.querySelector('#scrollArea'),
    //     rootMargin: '0px',
    //     threshold: 1.0
    //   }
      
    //   let observer = new IntersectionObserver(callback, options);

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
	height: 100vh;
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

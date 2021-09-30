import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { colors } from '../Themes';
import { IProject } from './Interfaces';

interface props {
	project: IProject;
}

export default function ProjectCard({ project }: props) {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});

	return (
		<ProjectContainer>
			<ProjectTile
				href={project.hrefLink}
				target="_blank"
				rel="noreferrer"
			>
				<ImageContainer>
					{isMobile ? (
						<TextOverlay>
							<p>{project.description}</p>
						</TextOverlay>
					) : (
						<div>
							<p></p>
						</div>
					)}

					{/* {isMobile && (
						<TextOverlay>
							<p>{project.description}</p>
						</TextOverlay>
					)} */}
					<img
						src={project.imgSrc}
						alt={project.imgAlt}
					/>
				</ImageContainer>
				<ProjectTitle>
					<span className="code">&lt;</span>
					{project.projectName}
					<span className="code">&#47;&gt;</span>
				</ProjectTitle>
			</ProjectTile>
		</ProjectContainer>
	);
}

const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	margin: 1rem;
	border: 1px solid white;
`;

const ProjectTile = styled.a`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	text-decoration: none;

	&:hover {
		color: ${colors.darkText};
	}
`;

const ImageContainer = styled.div`
	position: relative;
	display: flex;
	img {
		width: 100%;
	}
`;

const TextOverlay = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	color: ${colors.forrestGreen};
	background: rgba(0, 0, 0, 0.8);
	height: 100%;
	text-align: center;
	opacity: 0;
	border-radius: 5px 5px 0 0;
`;

const ProjectTitle = styled.h4`
	display: flex;
	background-color: gray;
	flex-grow: 1;
	margin: 0;
	color: black;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	.code {
		opacity: 0;
		transition: 0.3s ease-in-out;
	}
`;

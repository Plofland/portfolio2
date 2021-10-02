import React, { useState } from 'react';
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

	const [isHidden, SetIsHidden] = useState<boolean>(true);

	return (
		<ProjectTile
			isHidden={isHidden}
			href={project.hrefLink}
			target="_blank"
			rel="noreferrer"
			onMouseEnter={() => SetIsHidden(!isHidden)}
			onMouseLeave={() => SetIsHidden(!isHidden)}
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
			<ProjectTitle isHidden={isHidden}>
				{project.projectName}
			</ProjectTitle>
		</ProjectTile>
	);
}

const ProjectTile = styled.a<{ isHidden: boolean }>`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	text-decoration: none;
	width: 300px;
	margin: 1rem;

	// border: 1px solid white;

	&:hover {
		color: ${colors.darkText};
	}
`;

const ImageContainer = styled.div`
	position: relative;
	display: flex;
	z-index: 2;
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
	// border: 1px solid black;
`;

const ProjectTitle = styled.h4<{ isHidden: boolean }>`
	// border: 1px solid white;
	display: flex;
	// background-color: gray;
	flex-grow: 1;
	margin: 0;
	color: black;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	z-index: 1;

	transform: ${(props) =>
		props.isHidden ? 'translateY(-3rem)' : 'none'};
	transition: ease-in-out 0.4s;
`;

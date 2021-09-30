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
	console.log(isHidden);

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
			<ProjectTitle>
				<span className="code">&lt;</span>
				{project.projectName}
				<span className="code">&#47;&gt;</span>
			</ProjectTitle>
		</ProjectTile>
	);
}

const ProjectTile = styled.a<{isHidden: boolean}>`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	text-decoration: none;
	width: 300px;
	margin: 1rem;

	// border: 1px solid white;
    
	&:hover {
		color: ${colors.darkText};
        border: ${(props) => props.isHidden ? 'none' : ' 2px solid red'}
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
	// border: 1px solid black;
`;

const ProjectTitle = styled.h4`
	border: 1px solid white;
	display: flex;
	// background-color: gray;
	flex-grow: 1;
	margin: 0;
	color: black;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	&:hover {
		transformy: 50px;
	}

	.code {
		opacity: 0;
		transition: 0.3s ease-in-out;
	}
`;

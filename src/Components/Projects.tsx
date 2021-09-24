import React from 'react';
import styled from 'styled-components';

export default function Projects() {
	return <StyledProjects id='projects'></StyledProjects>;
}

const StyledProjects = styled.div`
	display: flex;
	height: 100vh;
	background-color: blue;
`;

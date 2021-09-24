import React from 'react';
import styled from 'styled-components';

export default function About() {
	return <StyledAbout id='about'></StyledAbout>;
}

const StyledAbout = styled.div`
	display: flex;
	height: 100vh;
	background-color: white;
`;

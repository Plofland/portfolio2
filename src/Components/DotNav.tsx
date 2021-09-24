import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mq } from '../Themes/index';

export default function DotNav() {
	return (
		<StyledNav>
			<li>
				<a href="#about">
					<CircleIcon
						icon={['far', 'circle']}
						size="lg"
					/>
				</a>
			</li>
			<li>
				<a href="#skills">
					<CircleIcon
						icon={['far', 'circle']}
						size="lg"
					/>
				</a>
			</li>
			<li>
				<a href="#projects">
					<CircleIcon
						icon={['far', 'circle']}
						size="lg"
					/>
				</a>
			</li>
		</StyledNav>
	);
}

const StyledNav = styled.ul`
	display: flex;
	height: 100vh;
	background-color: black;

    li {
        text-decoration: none;
    }
    
    a {
        color: purple;
    }
`;
const CircleIcon = styled(FontAwesomeIcon)`
	${mq({ margin: ['.5rem', '.4rem', '0.5rem'] })};
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mq } from '../Themes/index';
import { useMediaQuery } from 'react-responsive';

export default function DotNav() {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});
	// const [active, setActive] = useState(false);


    // console.log(active);
	return (
		<MainStay>
			<UnorderedNav>
				<li>
					<a
						href="#about"
						// onClick={setActive(true)}
					>
						<CircleIcon
							icon={['far', 'circle']}
							size={isMobile ? 'xs' : 'sm'}
						/>
					</a>
				</li>
				<li>
					<a
						href="#skills"
						// onClick={setActive(true)}
					>
						<CircleIcon
							icon={['far', 'circle']}
							size={isMobile ? 'xs' : 'sm'}
						/>
					</a>
				</li>
				<li>
					<a
						href="#projects"
						// onClick={setActive(true)}
					>
						<CircleIcon
							icon={['far', 'circle']}
							size={isMobile ? 'xs' : 'sm'}
						/>
					</a>
				</li>
			</UnorderedNav>
		</MainStay>
	);
}

const MainStay = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	position: fixed;
	right: 1rem;
`;

const UnorderedNav = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;

	a {
		color: purple;
		display: flex;
	}
`;
const CircleIcon = styled(FontAwesomeIcon)`
	${mq({ margin: ['.5rem', '.4rem', '0.5rem'] })};
`;

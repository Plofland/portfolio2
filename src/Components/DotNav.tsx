import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { mq } from '../Themes/index';
import { useMediaQuery } from 'react-responsive';

export default function DotNav() {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});
	const [active, setActive] = useState(false);

	// console.log(active);
	return (
		<MainStay>
			<UnorderedNav>
				<li>
					<a
						href="#about"
						onClick={() => setActive(!active)}
					>
						<CircleIcon
							icon={active ? fasCircle : faCircle}
							size={isMobile ? 'xs' : 'sm'}
						/>
					</a>
				</li>
				<li>
					<a
						href="#skills"
						onClick={() => setActive(!active)}
					>
						<CircleIcon
                            icon={active ? fasCircle : faCircle}
							size={isMobile ? 'xs' : 'sm'}
						/>
					</a>
				</li>
				<li>
					<a
						href="#projects"
						onClick={() => setActive(!active)}
					>
						<CircleIcon
                            icon={active ? fasCircle : faCircle}
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

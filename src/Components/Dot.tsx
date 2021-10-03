import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { mq } from '../Themes/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';

// interface props {
// 	active: boolean
// }

// type props = {
//     section: string
//     key: number
// }

export default function Dot(section: string) {
	const isMobile = useMediaQuery({
		query: '(max-width: 750px)'
	});

	const [active, setActive] = useState<boolean>(false);
	console.log(section);

	return (
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
	);
}

const CircleIcon = styled(FontAwesomeIcon)`
	${mq({ margin: ['.5rem', '.4rem', '0.5rem'] })};
`;

import React from 'react';

import { navData } from '../Navigation/navigationContent';

import { FooterWrapper, FooterLink, FooterList } from './index.styled';

export const Footer = () => {
	return (
		<FooterWrapper>
			<FooterList>
				{navData.map((nav) => (
					<FooterLink href={nav.href} key={nav.name} passHref>
						{nav.name}
					</FooterLink>
				))}
			</FooterList>
			<p className="copyright">&copy; 2024 UD Developer. All rights reserved.</p>
		</FooterWrapper>
	);
};

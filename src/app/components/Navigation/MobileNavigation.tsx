import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { navData } from './navigationContent';
import { MobileNavCheckbox, MobileNavButton, MobileNavIcon, MobileNav, MobileNavLink } from './MainNavigation.styled';

export const MobileNavigation = () => {


	return (
		<>
			<MobileNavCheckbox type="checkbox" className="mobile-nav__toggle" id="mobile-nav-checkbox" />
			<MobileNavButton className="mobile-nav__button" htmlFor="mobile-nav-checkbox">
				<MobileNavIcon className="mobile-nav__icon"></MobileNavIcon>
			</MobileNavButton>
			<MobileNav className="mobile">
				{navData.map((navInfo) => (
					<Link href={navInfo.href} passHref legacyBehavior key={navInfo.name}>
						<MobileNavLink data-link={navInfo.name}>{navInfo.name}</MobileNavLink>
					</Link>
				))}
			</MobileNav>
		</>
	);
};

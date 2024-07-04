import styled from 'styled-components';
import { responsive } from '@/utils/responsive';

export const Container = styled.div`
	grid-column: full-start / full-end;
	display: grid;
	width: 100%;
	padding: 0.4rem 1rem;
	align-items: center;
	height: 9rem;
	grid-template-columns: 1fr max-content;
	z-index: 100;

	${responsive.tabPort} {
		grid-template-columns: 1fr min-content;
	}

	& > * {
		flex: 1;
	}

	&.sticky {
		background-color: black;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		padding: 0.4rem 1rem;
		height: 6.5rem;

		${responsive.tabPort} {
			position: relative;
		}
	}
`;
/** App Logo */

export const AppLogo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: var(--primary);

	span {
		margin-left: 0.5rem;
		font-family: var(--title);
	}
`;

/** Navigation */

export const Nav = styled.nav`
	display: flex;
	flex-basis: 30%;
	justify-content: space-evenly;
	position: relative;
	font-family: var(--title);

	${responsive.tabPort} {
		display: none;
	}
`;

export const NavLink = styled.a`
	&:visited,
	&:link {
		color: #000000;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		font-weight: bold;
		font-size: 0.9rem;
		list-style: none;
		text-transform: capitalize;
		padding: 1rem 1.5rem;
		border: 2px solid transparent;

		border-radius: 50%;

		${responsive.tabPort} {
			color: black;
		}
	}

	&:hover,
	:focus {
		color: var(--primary);
	}

	&.active {
		color: var(--primary);
	}
`;

/** Mobile Navigation */

export const MobileNavIcon = styled.span`
	${responsive.tabPort} {
		background-color: var(--primary);
		width: 2rem;
		height: 5px;
		display: flex;
		position: relative;

		&::before,
		&::after {
			content: '';
			background-color: var(--primary);
			width: 2rem;
			height: 5px;
			position: absolute;
			display: block;
		}

		&::before {
			top: -10px;
		}

		&::after {
			top: 10px;
		}
	}
`;

export const MobileNav = styled.nav`
	display: none;

	${responsive.tabPort} {
		justify-self: center;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		background-color: white;
		z-index: 10;
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}
`;

export const MobileNavLink = styled.a`
	color: #000000;
	font-family: var(--title);

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		display: flex;
		justify-content: center;
		transform: translate(-50%, -50%);
		align-items: center;
		font-size: 2em;
		font-weight: bold;
		color: gray;
		opacity: 0;
		text-transform: capitalize;
	}

	&:link,
	&:visited {
		font-size: 1.6rem;
		margin: 1rem auto;
		text-transform: uppercase;
	}
`;

export const MobileNavButton = styled.label`
	display: none;
	${responsive.tabPort} {
		display: flex;
		width: 3rem;
		height: 3rem;
		cursor: pointer;
		z-index: 40;
		position: relative;
		justify-content: center;
		align-items: center;
	}
`;

export const MobileNavCheckbox = styled.input`
	display: none;

	${responsive.tabPort} {
		&:checked {
			~ nav.mobile {
				display: flex;
			}

			+ .mobile-nav__button .mobile-nav__icon {
				background-color: transparent;

				&::before,
				&::after {
					background-color: red;
					top: 0;
				}

				&::before {
					rotate: 45deg;
				}

				&::after {
					rotate: -45deg;
				}
			}
		}
	}
`;

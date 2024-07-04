import Link from 'next/link';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	background-color: var(--secondary);
	grid-column: full-start / full-end;
	padding: 2rem;

	.copyright {
		font-size: 0.8rem;
		margin-top: 4rem;
		margin-right: auto;
		margin-left: auto;
		text-align: center;
		font-weight: bold;
		width: 70%;
	}
`;

export const FooterList = styled.footer`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	grid-gap: 0.5rem;
	align-items: center;
`;

export const FooterItem = styled.li``;
export const FooterLink = styled(Link)`
	&:link,
	&:visited {
		font-size: 0.9rem;
		cursor: pointer;
		color: #000000;
		text-decoration: none;
		text-transform: uppercase;
		text-align: center;
		padding: 1.5rem;
		display: block;
		font-family: var(--title);
		font-weight: bolder;
	}

	&:hover,
	&:focus {
		background-color: rgba(#fff, 0.05);
		transform: translateY(-3px);
		outline: none;
		color: var(--paragraph);
	}
`;

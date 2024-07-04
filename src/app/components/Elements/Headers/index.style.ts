import styled from 'styled-components';

import { responsive } from '@/utils/responsive';

export const SectionHeaderContainer = styled.h2`
	display: flex;
	flex-direction: column;
	justify-content: center;
	grid-column: 1 / -1;
	font-weight: bolder;

	.content {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		align-items: center;
		justify-content: center;
		align-self: center;
		width: 50%;
		column-gap: 10px;

		${responsive.tabPort} {
			display: none;
		}

		&::before,
		&::after {
			content: '';
			height: 6px;
			display: block;
			background-color: var(--header);
		}
	}
`;

/** CustomPageHeader */

export const CustomHeader = styled.header`
	grid-column: full-start / full-end;
	width: 100%;
	position: relative;
	margin-top: 2rem;
	padding: 3rem 2rem;

	.content {
		width: 100%;
		height: 100%;
		display: grid;
		font-weight: bolder;
		grid-template-columns: 1fr;
		color: var(--header);
		position: relative;
		text-align: center;

		${responsive.tabPort} {
			padding: 2vh 0.8rem;
			grid-template-columns: 1fr;
		}

		img {
			grid-column: 2 / 3;
			grid-row: 1 / 3;
			background-color: white;
		}
	}

	.title {
		display: block;
		grid-column: 1 / 2;

		${responsive.tabPort} {
			grid-column: 1 / -1;
			text-align: center;
		}
	}

	.list {
		display: flex;
		list-style: none;
		color: black;
		font-size: 1.2rem;
		font-family: var(--paragraph);
		color: var(--primary);
		grid-column: 1 / 2;
		text-transform: lowercase;

		${responsive.tabPort} {
			font-size: 1rem;
			grid-column: 1 / -1;
			text-align: center;
			justify-content: center;
		}
	}

	.item {
		&:not(:last-child) {
			&::after {
				content: '/';
				margin-right: 1rem;
				margin-left: 1rem;
			}
		}
	}

	.link {
		&,
		&:link {
			text-decoration: none;
		}

		&:hover,
		&:active {
			color: var(--primary-dark);
		}

		&.active {
			text-decoration: underline;
		}
	}
`;

export const ImageContainer = styled.div`
	grid-column: 2 / 3;
	grid-row: 1 / 3;
	position: relative;

	${responsive.tabPort} {
		grid-column: 1 / -1;
		grid-row: unset;
		height: 18vh;
	}
`;

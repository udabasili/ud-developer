import { responsive } from '@/utils/responsive';
import styled from 'styled-components';

// ---------------------------------------------------- GENERAL STYLES ---------------------------------------------------- //

// grid row with props for grid column
export const GridRow = styled.div<{ cols: number }>`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};

	${responsive.tabPort} {
		grid-template-columns: 1fr;
		padding: 1rem;
	}
`;

export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${responsive.tabPort} {
		padding: 2rem 0;
	}
`;

export const Section = styled.section`
	padding: 10rem 0;
	grid-column: center-start / center-end;

	${responsive.tabPort} {
		grid-column: full-start / full-end;
	}
`;

// ---------------------------------------------------- WEB DESIGN STYLES ---------------------------------------------------- //

export const WebDesignSection = styled(Section)`
	.gallery {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
	}

	.gallery__item {
		position: relative;
		overflow: hidden;
	}

	.gallery__item--1 {
		grid-column: span 2;
		grid-row: span 2;
	}

	.gallery__item--2 {
		grid-column: span 2;
		grid-row: span 2;
	}

	.gallery__item--3 {
		grid-column: span 2;
		grid-row: span 1;
	}

	.gallery__item--4 {
		grid-row: span 1;
	}

	.gallery__item--5 {
		grid-row: span 1;
	}

	.gallery__item--6 {
		grid-column: span 2;
		grid-row: span 1;
	}

	.gallery__item--7 {
		grid-column: span 2;
		grid-row: span 1;
	}
`;

// ---------------------------------------------------- WEB DEVELOPMENT STYLES ---------------------------------------------------- //

export const WebDevelopmentSection = styled(Section)``;

export const WebDevelopmentCard = styled.div`
	display: grid;
	border-radius: 1rem;

	figure {
		width: 100%;
		height: 100%;
		position: relative;
		grid-column: 1 / -1;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.title {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		font-family: var(--title);
		padding-top: 1rem;
	}

	.category {
		font-size: 1.2rem;
		font-weight: 500;
		font-family: var(--content);
		color: var(--paragraph);
	}

	.button {
		&:link,
		&:visited {
			background-color: var(--primary);
			color: var(--black);
			padding: 0.5rem 2rem;
			border-radius: 0.5rem;
			text-align: center;
			font-size: 1.2rem;
			font-weight: 700;
			text-transform: uppercase;
			font-family: var(--title);
			margin-top: 1rem;
			transition: all 0.3s;
			grid-column: 1 / 2;
			justify-self: flex-start;
		}

		&:hover {
			background-color: var(--black);
			color: var(--white);
		}

		&:active {
			transform: scale(0.9);
		}
	}
`;

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
	${responsive.tabPort} {
		padding: 2rem 0;
	}
`;

export const Section = styled.section`
	padding: 10rem 0;
	grid-column: center-start / center-end;
	background-color: #ffffff;

	${responsive.tabPort} {
		grid-column: full-start / full-end;
		padding: 0;
	}
`;
// ---------------------------------------------------- SERVICES CARD STYLES ---------------------------------------------------- //

export const ServiceCardContainer = styled(GridItem)`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content min-content;
	gap: 1rem;
	padding: 2rem;
	border-radius: 1rem;
	background-color: #ffffff;
	box-shadow: var(--shadow);
	transition: all 0.2s;

	&:hover {
		transform: translateY(-0.5rem);
		box-shadow: var(--shadow-dark);
	}

	.icon {
		width: 5rem;
		height: 5rem;
	}

	ul {
		color: #000000;
	}

	li::before {
		content: '\2713';
		color: var(--color-secondary);
		margin-right: 0.5rem;
	}
`;

// ---------------------------------------------------- SERVICES STYLES ---------------------------------------------------- //

export const ServicesWrapper = styled(Section)`
	background-color: var(--color-primary);
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
	gap: 2rem;

	${responsive.tabPort} {
		padding: 1rem 2rem;
	}

	${responsive.mobile} {
		grid-column: full-start/full-end;
		padding: 1rem 1.4rem;
		grid-template-columns: 1fr;
	}
`;

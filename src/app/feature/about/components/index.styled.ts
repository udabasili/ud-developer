import { responsive } from '@/utils/responsive';
import styled from 'styled-components';

// ---------------------------------------------------- GENERAL STYLES ---------------------------------------------------- //

// grid row with props for grid column
export const GridRow = styled.div<{ cols: number }>`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
	padding: 2rem 1rem;

	${responsive.tabPort} {
		grid-template-columns: 1fr;
		padding: 1rem 0;
	}
`;

export const GridItem = styled.div`
	${responsive.tabPort} {
		padding: 2rem 0;
	}
`;

export const Section = styled.section`
	grid-column: full-start / full-end;
	display: grid;

	${responsive.tabPort} {
	}
`;
// ---------------------------------------------------- ABOUT SUMMARY STYLES ---------------------------------------------------- //

export const AboutSection = styled(Section)``;

export const AboutMePhoto = styled.figure`
	margin-bottom: 2rem;
	background-color: black;
	height: 100%;
	display: grid;

	img {
		width: 100% !important;
		height: 100% !important;
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
`;

export const AboutMeSummaryText = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content min-content 1fr;
	padding: 8rem 4rem;

	${responsive.tabPort} {
		padding: 4rem 1rem;
	}

	h3 {
		font-weight: 600;
		color: var(--paragraph);
		line-height: 1.5;
	}

	p {
		color: var(--paragraph);
		line-height: 1.5;
		margin-top: 25px;
	}
`;

// ---------------------------------------------------- ABOUT EXPERIENCE STYLES ---------------------------------------------------- //

export const AboutExperienceSection = styled(Section)`
	background-color: var(--background);
	padding: 10rem 5rem;
`;

export const ExperienceList = styled.ol`
	border: 1px solid var(--paragraph);
	border-radius: 0.5rem;
	padding: 2rem;
`;

// ---------------------------------------------------- ABOUT EDUCATION STYLES ---------------------------------------------------- //

export const AboutEducationSection = styled(Section)`
	padding: 10rem 5rem;
`;

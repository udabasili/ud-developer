
import { responsive } from '@/utils/responsive';
import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-columns:
		[full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 15rem) [col-end])
		[center-end] minmax(6rem, 1fr)
		[full-end];
	color: #17252A;
	position: relative;
	font-weight: 400;
	font-size: 65%;
	font-size: 1.125rem;
	background-color: var(--background);	

	${responsive.tabPort} {
		grid-template-columns:
			[full-start] minmax(2rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 15rem) [col-end])
			[center-end] minmax(2rem, 1fr)
			[full-end];
	}

	
`;

export const Main = styled.main`
	display: grid;
	grid-template-columns: inherit;
	grid-column: full-start / full-end;
`;

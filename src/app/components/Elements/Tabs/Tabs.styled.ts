import styled from 'styled-components';

import { responsive } from '@/utils/responsive';

// container with props for calculating grid columns
export const Container = styled.div<{ cols: number }>`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.cols}, 1fr)`};
	grid-column: center-start / center-end;

	${responsive.tabLand} {
		grid-column: full-start / full-end;
		margin: 0 1rem;
	}
`;

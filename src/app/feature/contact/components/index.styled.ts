import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

import { responsive } from '@/utils/responsive';

export const Section = styled.section`
	display: grid;
	padding: 3rem 1rem;
	grid-column: full-start / full-end;
	margin-top: 14rem;

	${responsive.tabPort} {
		padding: 1.5rem 1rem;
	}
`;

export const ContactSummarySection = styled(Section)`
	display: grid;
	grid-column: center-start / center-end;

	${responsive.tabPort} {
		grid-column: full-start / full-end;
	}
`;

export const ContactList = styled.ul`
	width: 100%;
	display: grid;
	grid-column: 1 / -1;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

	${responsive.tabLand} {
		flex-direction: column;
	}
`;
export const ContactItem = styled.li`
	display: flex;
	align-items: center;

	${responsive.tabLand} {
		margin: 3rem;
	}

	.icon {
		color: var(--theme1);
		margin: 0 2rem;
		font-size: 2rem;
	}

	.details {
		display: flex;
		font-size: 1rem;
		align-items: flex-start;
		text-align: left;
		justify-content: flex-start;
		flex-direction: column;

		.title {
			font-weight: bold;
		}
	}
`;

/** ContactForm Component */

export const ContactFormSection = styled(Section)`
	display: grid;
	grid-column: center-start / center-end;
	grid-template-columns: 1fr;

	${responsive.tabLand} {
		grid-column: 1 / -1;
	}
`;

export const FormContainer = styled(Form)`
	width: 50%;
	margin: 3rem auto;
	flex-direction: column;
	display: flex;
	align-items: center;

	${responsive.tabLand} {
		width: 90%;
	}

	button {
	}
`;

export const FormControl = styled.div`
	width: 100%;
	background-color: white;
	position: relative;
	display: grid;
	margin: 0.4rem 0;
	border: 1px solid black;
	grid-column: 1;
	border-radius: 4px;

	&.text-area {
		grid-template-rows: min-content 1fr min-content;
		height: 15rem;
		margin-bottom: 5rem;
		border-radius: 4px;
	}
`;

export const Input = styled(Field)`
	border: none;
	font-size: 1.1rem;
	padding: 0.4rem 1.4rem;
	outline: none;
	background-color: transparent;
	color: #000000;

	&.text-area {
		border: none;
		padding: 0.8rem 0;
		padding-left: 1rem;
		outline: none;

		&:focus ~ .form__label {
			font-size: 0.7rem;
		}
	}

	&:focus ~ .form__label {
		font-size: 0.6rem;
	}
`;

export const Label = styled.label`
	grid-row: 1;
	font-size: 0.8rem;
	margin-left: 1rem;
	justify-self: flex-start;
	color: #000000;
`;

export const CustomErrorMessage = styled(ErrorMessage)`
	color: red;
	margin-left: 0.8rem;
	justify-self: flex-start;
	font-size: 0.8rem;
	font-weight: 600;
	padding-bottom: 0.3rem;
`;

import styled from 'styled-components';

import { responsive } from '@/utils/responsive';

export const PortfolioDetailsContainer = styled.div`
	padding: 6rem 0;
	display: grid;
	grid-column: full-start / full-end;
	row-gap: 2rem;
	align-items: center;
	grid-template-columns: inherit;

	${responsive.tabPort} {
		grid-column: full-start / full-end;
	}

	& > * {
		grid-column: center-start / center-end;

		${responsive.tabPort} {
			grid-column: full-start / full-end;
		}
	}

	.authentication {
		width: auto;

		&__row {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
			width: 100%;
		}

		&__list {
			font-size: 2.3rem;
			list-style: none;
		}
	}

	.description {
		width: auto;
		height: max-content;

		${responsive.tabPort} {
			padding: 1rem 0.7rem;
			text-align: center;
		}
	}

	.goal {
		width: auto;

		${responsive.tabPort} {
			padding: 1rem 0.7rem;
			text-align: center;
		}
	}

	.lesson-learned {
		width: auto;

		${responsive.tabPort} {
			padding: 1rem 0.7rem;
			text-align: center;
		}
	}

	.main-image {
		width: 70vw;
		margin: 2rem auto;

		${responsive.mobile} {
		}
	}

	.other-images {
		width: auto;
	}

	.summary {
		width: auto;
		display: grid;

		grid-template-columns: full-start / full-end;

		&__details {
			width: 100%;
			display: grid;
			margin: 2rem 0;

			.detail {
				&__list {
					display: grid;
					justify-self: flex-end;
					width: 100%;
					grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
					row-gap: 1.5rem;
				}

				&__item {
					list-style: none;
					text-align: center;

					.value {
						font-size: 1.1rem;

						a {
							color: var(--primary);
							text-decoration: none;
						}
					}
					.label {
						font-weight: bold;
						text-transform: uppercase;
						text-decoration: underline;
						display: block;
						font-size: 1.4rem;
						padding-bottom: 10px;
					}

					.value {
						${responsive.tabPort} {
							font-size: 0.9rem;
							font-weight: 500;
						}
					}
				}
			}
		}
	}

	.thought-process {
		width: auto;

		${responsive.tabPort} {
			padding: 1rem 0.7rem;
			text-align: center;
		}
	}

	.web-stack {
		width: auto;
		${responsive.tabPort} {
			padding: 1rem 0.7rem;
			text-align: center;
		}
	}

	.each-slide > div {
		display: flex;
		align-items: center;
		justify-content: center;
		background-size: cover;
		height: 350px;

		${responsive.tabPort} {
			background-size: 100%;
			background-repeat: no-repeat;
		}
	}

	.tech {
		&__item {
			padding-bottom: 2px;
		}
	}

	.each-slide span {
		font-size: 20px;
		background: #efefef;
		text-align: center;
	}

	.react-slideshow-container {
		position: relative;

		.default-nav {
			position: absolute;
			bottom: unset !important;

			&:first-child {
				left: 0;
				bottom: unset !important;
			}

			&:last-child {
				right: 0 !important;
				left: unset !important;
				bottom: unset !important;
				margin-left: unset !important;
			}
		}
	}
`;

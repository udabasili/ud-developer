import Image from 'next/image';
import React from 'react';

import { Header2, Header3, Header6 } from '@/components/Elements/Headers';
import { AboutMePhoto, AboutSection, AboutMeSummaryText, GridItem, GridRow } from './index.styled';

export const AboutMeSummary = () => {

	return (
		<AboutSection>
			<GridRow cols={2} className="gap-x-5">
				<GridItem>
					<AboutMePhoto >
						<Image
							src="/home/about.webp"
							alt="Ud Developers"
							fill
							sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"
						/>
					</AboutMePhoto>
				</GridItem>
				<GridItem>
					<AboutMeSummaryText>
						<Header6 className="u-margin-bottom-small ">Who We Are</Header6>

						<Header2 className="">Bringing Your Digital Dreams to Life</Header2>
						<p>

							Welcome to Ud Developers, where we specialize in turning your web development visions into reality. My name is Udendu, and I am a dedicated freelance web Developers with a passion for creating dynamic and responsive websites that stand out in the digital landscape.
						</p>
						<p>
							At Ud Developers, we believe in the power of the web to transform businesses and personal brands. With years of experience in the industry, we offer a comprehensive range of web development services tailored to meet your unique needs. From simple landing pages to complex e-commerce platforms, we’ve got you covered.
						</p>
					</AboutMeSummaryText>

				</GridItem>
			</GridRow>


		</AboutSection>
	);
};

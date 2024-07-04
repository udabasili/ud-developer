import React from 'react';
import { IconType } from 'react-icons';

export type IconMapProps = {
	[k: string]: {
		name: string;
		color: string;
		icon: IconType;
	};
};

export type TechnologyIconProps = {
	color: string;
	icon: IconType;
};

export type WebStackProps = {
	tech: string;
	info: string;
};

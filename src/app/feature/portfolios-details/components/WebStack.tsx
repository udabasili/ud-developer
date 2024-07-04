import React from 'react';

import { Header3 } from '@/components/Elements/Headers';

import { WebStackProps } from '../types';

export function WebStack({ info }: WebStackProps) {
	return (
		<div className="web-stack">
			<Header3 className=" u-margin-bottom-small  ">Web Stack</Header3>
			<p className="paragraph ">{info}</p>
		</div>
	);
}

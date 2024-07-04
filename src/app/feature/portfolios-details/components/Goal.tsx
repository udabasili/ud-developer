import React, { FC } from 'react';

import { Header2, Header3 } from '@/components/Elements/Headers';

type GoalProps = {
	text: string;
};

export const Goal = ({ text }: GoalProps) => {
	return (
		<div className="goal">
			<Header3 className="u-margin-bottom-small">Project Purpose and Goal</Header3>
			<p className="paragraph">{text}</p>
		</div>
	);
};

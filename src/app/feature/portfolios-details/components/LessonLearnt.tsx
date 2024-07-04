import React, { FC } from 'react';

import { Header3 } from '@/components/Elements/Headers';

type LessonLearntProps = {
	text: string;
};

export const LessonLearnt = ({ text }: LessonLearntProps) => {
	return (
		<div className="lesson-learned">
			<Header3 className="u-margin-bottom-small">Lesson Learned</Header3>
			<p className="paragraph">{text}</p>
		</div>
	);
};

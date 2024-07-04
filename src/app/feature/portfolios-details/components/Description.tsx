import React, { FC } from 'react';
type DescriptionProps = {
	text: string;
};

export const Description = ({ text }: DescriptionProps) => {
	return (
		<div className="description">
			<p className="paragraph">{text}</p>
		</div>
	);
};

export default Description;

import React, { FC } from 'react';

import { Header3 } from '@/components/Elements/Headers';

interface AuthenticationIProps {
	data: string;
}

export const Authentication = ({ data }: AuthenticationIProps) => {
	return (
		<div className="authentication">
			<Header3 className="u-margin-bottom-small">Sample Login Details</Header3>
			<div className="authentication__row">
				{data.split(';').map((auth) => (
					<div className="authentication__col" key={auth}>
						<ul className="authentication__list">
							{auth.split(',').map((user) => (
								<React.Fragment key={user}>
									<li className="authentication__item paragraph" key={user}>
										{user}
									</li>
								</React.Fragment>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};
export default Authentication;

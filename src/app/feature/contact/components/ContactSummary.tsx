import React from 'react';
import { FaMailBulk, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import 'react-toastify/dist/ReactToastify.css';
import { ContactItem, ContactList, ContactSummarySection } from './index.styled';

export function ContactSummary() {
	return (
		<ContactSummarySection>
			<ContactList className="contact__list">
				<ContactItem>
					<FaMailBulk className="icon" />
					<div className="details">
						<span className="title">Email</span>
						<span className="desc">udbasili@gmail.com</span>
					</div>
				</ContactItem>
				<ContactItem>
					<FaGithubSquare className="icon" />
					<div className="details">
						<span className="title">Github</span>
						<span className="desc">https://github.com/udabasili</span>
					</div>
				</ContactItem>
				<ContactItem>
					<FaLinkedin className="icon" color="#0077b5" />
					<div className="details">
						<span className="title">Linkedin</span>
						<span className="desc">http://bit.ly/3VNZO6I</span>
					</div>
				</ContactItem>
			</ContactList>
		</ContactSummarySection>
	);
}

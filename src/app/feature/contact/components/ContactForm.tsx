import emailjs, { init } from '@emailjs/browser';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { toast, ToastContent } from 'react-toastify';


import { Button } from '@/components/Elements/Button';
import { Header2 } from '@/components/Elements/Headers';
import { ContactSchema } from '@/lib/schema';

import { MyFormValues } from '../types';

import { ContactFormSection, CustomErrorMessage, FormContainer, FormControl, Input, Label } from './index.styled';

const initialValues: MyFormValues = {
	email: '',
	name: '',
	description: '',
};

init(process.env.NEXT_PUBLIC_EMAILJS_UID as string);

export const ContactForm = () => {
	const [isLoading, setLoading] = useState(false);

	return (
		<ContactFormSection>
			<Header2 className="u-margin-bottom-medium u-center-text"> General Enquiry</Header2>
			<Formik
				initialValues={initialValues}
				validationSchema={ContactSchema}
				onSubmit={async (values) => {
					setLoading(true);
					const { name, email, description } = values;
					const template_params = {
						userName: name,
						userEmail: email,
						description: description,
					};

					try {
						const response = await emailjs.send(
							process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
							process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
							template_params,
							process.env.NEXT_PUBLIC_EMAILJS_UID
						);
						if (response.status === 200) {
							toast.success('Email sent successfully');
						}
						setLoading(false);
					} catch (error) {
						const errorObject = error as ToastContent<string>;
						toast.error(errorObject);
					}
				}}
			>
				{({ handleSubmit }) => (
					<FormContainer>
						<FormControl>
							<Input id="name" name="name" type="text" required />
							<Label htmlFor="name" className="form__label">
								Full Name
							</Label>
							<CustomErrorMessage name="name" component="div" />
						</FormControl>
						<FormControl>
							<Input id="email" name="email" type="email" required />
							<Label htmlFor="email" className="form__label">
								Email
							</Label>
							<CustomErrorMessage name="email" component="div" />
						</FormControl>
						<FormControl className="text-area">
							<Input
								id="description"
								name="description"
								component="textarea"
								required
								className="text-area"
							/>
							<Label htmlFor="description" className="form__label">
								What would you like to know?
							</Label>
							<CustomErrorMessage name="description" component="div" />
						</FormControl>
						<Button
							variant="primary"
							size='lg'
							type="submit"
							onClick={handleSubmit as (e: any) => void}
							isLoading={isLoading}
						>
							Submit
						</Button>
					</FormContainer>
				)}
			</Formik>
		</ContactFormSection>
	);
};

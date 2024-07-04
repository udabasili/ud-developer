import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
	name: yup.string().required('Required'),
	description: yup.string().required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
});

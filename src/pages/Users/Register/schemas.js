import * as yup from 'yup';

export const validateForm = yup.object().shape({
    password: yup.string().required("Required field"),
    email: yup.string().required("Required field"),
    fullName: yup.string().required("Required field"),
    birthDate: yup.date().required("Required field"),
});
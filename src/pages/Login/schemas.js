import * as yup from 'yup';

export const validateForm = yup.object().shape({
    password: yup.string().required("Required field"),
    email: yup.string().required("Required field")
});
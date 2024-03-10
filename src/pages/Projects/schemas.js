import * as yup from 'yup';

export const validateProjectForm = yup.object().shape({
    title: yup.string().required("Required field"),
    totalCost: yup.number("Only numbers are accepted.").required("Required field"),
    description: yup.string().required("Required field")
});
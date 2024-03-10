import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../containers/Layout';
import { Typography, Grid } from '@mui/material';
import { ROUTE_PATH } from '../../../commons/constraints/routes-path';
import Button from '../../../components/Button';
import { ReactComponent as RegisterProjectBG } from '../../../assets/images/bg-edit-project.svg';
import { Formik, Form } from 'formik';
import Input from '../../../components/Form/Input';
import { PROJECT_INITIAL_VALUES } from '../constants';
import { validateProjectForm } from '../schemas';

function RegisterProject() {
    const navigate = useNavigate();
    const onSubmit = () => navigate(ROUTE_PATH.project);

    return (
        <Layout image={RegisterProjectBG}>
            <Formik onSubmit={onSubmit} initialValues={PROJECT_INITIAL_VALUES} validationSchema={validateProjectForm}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="w-75 mb-3">
                            <Typography variant="h3" fontWeight="bold">Let's create your new project!</Typography>
                        </div>
                        <div className="w-75 mb-3">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Input name="title" label="Title" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Input name="totalCost" label="Total Cost" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Input name="description" label="Description" />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="w-75 mb-3">
                            <Button className="py-2" size="large" fullWidth type="submit">Register</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
}

export default RegisterProject;
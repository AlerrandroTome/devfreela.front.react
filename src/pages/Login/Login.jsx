import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../containers/Layout';
import { ReactComponent as UserRegisterBG } from '../../assets/images/bg-register-user.svg';
import { Grid, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { ROUTE_PATH } from '../../commons/constraints/routes-path';
import Button from '../../components/Button';
import { validateForm } from './schemas';
import { INITIAL_VALUES } from './constants';
import Input from '../../components/Form/Input';

function RegisterUser() {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate(ROUTE_PATH.project);
    }

    return (
        <Layout image={UserRegisterBG}>
            <Formik onSubmit={onSubmit} initialValues={INITIAL_VALUES} validationSchema={validateForm}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="w-75">
                            <div className="w-100 mb-3">
                                <Typography variant="h3" fontWeight="bold">Login or register!</Typography>
                            </div>
                            <div className="w-100 mb-3">
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Input name="email" label="Email" />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Input name="password" label="Password" type="password" />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="w-100 mb-3">
                                <Button className="py-2" size="large" fullWidth type="submit">Login</Button>
                            </div>                
                            <div className="w-100 mb-3">
                                <Button className="py-2" variant="text" size="large" fullWidth onClick={() => navigate(`${ROUTE_PATH.user}/new-user`)}>Register</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
}

export default RegisterUser;
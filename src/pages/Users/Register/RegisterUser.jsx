import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../containers/Layout';
import { ReactComponent as UserRegisterBG } from '../../../assets/images/bg-user.svg';
import { FormControl, Typography, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
import { ROUTE_PATH } from '../../../commons/constraints/routes-path';
import Button from '../../../components/Button';
import { USER_INITIAL_VALUES } from './constants';
import { validateForm } from './schemas';
import { Formik, Form } from 'formik';
import Input from '../../../components/Form/Input';
import UsersServices from '../../../services/users';

function RegisterUser() {
    const navigate = useNavigate();       
    const [role, setRole] = useState('');

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const onSubmit = (values) => 
    {
        UsersServices.saveUsers({ ...values, role})
        .then(() => {
            navigate(ROUTE_PATH.home);
        })
        .catch((error) => alert(error.message));
    };
    
    return (
        <Formik onSubmit={onSubmit} initialValues={USER_INITIAL_VALUES} validationSchema={validateForm}>
            {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
                <Layout image={UserRegisterBG}>
                    <div className="w-100 mb-3">
                        <Typography variant="h2" fontWeight="bold">Hello!</Typography>
                        <Typography variant="h4" fontWeight="bold">Let's create your registration.</Typography>
                    </div>
                    <div className="w-100 mb-3">
                        <Typography variant="body1" fontWeight="bold">Which is your profile?</Typography>
                        <FormControl>
                            <RadioGroup row value={role} onChange={handleRoleChange}>
                                <FormControlLabel className="pr-7" value="dev" control={<Radio />} label="Dev" />
                                <FormControlLabel value="client" control={<Radio />} label="Client" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="w-75 mb-3">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input name="fullName" label="Full Name" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input className="mt-2" name="birthDate" label="" type="date" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input name="email" label="Email" type="email" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input type="password" name="password" label="Password" />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="w-75 mb-3">
                        <Button className="py-2" size="large" fullWidth type="submit">Continue</Button>
                    </div>
                </Layout>
            </Form>
            )}
        </Formik>
    );
}

export default RegisterUser;
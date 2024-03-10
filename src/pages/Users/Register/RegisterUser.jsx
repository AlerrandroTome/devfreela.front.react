import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../containers/Layout';
import { ReactComponent as UserRegisterBG } from '../../../assets/images/bg-register-user.svg';
import { FormControl, Typography, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import { ROUTE_PATH } from '../../../commons/constraints/routes-path';
import Button from '../../../components/Button';

function RegisterUser() {
    const navigate = useNavigate();

    return (
        <>
            <Layout image={UserRegisterBG}>
                <div className="w-100 mb-3">
                    <Typography variant="h2" fontWeight="bold">Hello!</Typography>
                    <Typography variant="h4" fontWeight="bold">Let's create your registration.</Typography>
                </div>
                <div className="w-100 mb-3">
                    <Typography variant="body1" fontWeight="bold">Which is your profile?</Typography>
                    <FormControl>
                        <RadioGroup row>
                            <FormControlLabel className="pr-7" value="dev" control={<Radio />} label="Dev" />
                            <FormControlLabel value="customer" control={<Radio />} label="Client" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="w-75 mb-3">
                    <TextField className="w-100 mb-2" label="Full Name" variant="standard" />
                    <TextField className="w-100 mb-2" label="Birth Date" variant="standard" />
                    <TextField className="w-100 mb-2" label="Email" variant="standard" />
                    <TextField className="w-100 mb-2" label="Password" variant="standard" />
                </div>
                <div className="w-75 mb-3">
                    <Button className="py-2" size="large" fullWidth onClick={() => navigate(ROUTE_PATH.project)}>Continue</Button>
                </div>
            </Layout>
        </>
    );
}

export default RegisterUser;
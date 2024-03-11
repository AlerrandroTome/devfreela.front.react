import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../../containers/Layout';
import { Typography, Grid } from '@mui/material';
import { ROUTE_PATH } from '../../../commons/constraints/routes-path';
import Button from '../../../components/Button';
import { ReactComponent as EditProjectBG } from '../../../assets/images/bg-edit-project.svg';
import { Formik, Form } from 'formik';
import Input from '../../../components/Form/Input';
import { PROJECT_INITIAL_VALUES } from '../constants';
import { validateProjectForm } from '../schemas';
import ProjectServices from '../../../services/projects';

function EditProject() {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [project, setProject] = useState(PROJECT_INITIAL_VALUES);
    const userId = localStorage.getItem('userId');
    
    const onSubmit = (values) =>  {
        ProjectServices.updateProjects(projectId, { ...values, idClient: userId })
        .then(() => {
            navigate(ROUTE_PATH.project)
        })
        .catch((error) => alert(error.message));
    }

    const getProject = () => {
        ProjectServices.getProjectById(projectId)
        .then(({ data }) => {
            setProject(data);
        })
        .catch((error) => { 
            alert(`Request error: ${error}`);
        });
    }
    
    useEffect(() => {
        if(userId === null || userId === undefined || userId === "") 
        {
            navigate(ROUTE_PATH.home);
        }
        else {
            getProject();
        }
    }, [projectId]);

    return (
        <Layout image={EditProjectBG}>
            <Formik enableReinitialize onSubmit={onSubmit} initialValues={project} validationSchema={validateProjectForm}>
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="w-75 mb-3">
                            <Typography variant="h2" fontWeight="bold">Edit project</Typography>
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
                            <Button className="py-2" size="large" fullWidth type="submit">Save</Button>
                        </div>                        
                        <div className="w-75 mb-3">
                            <Button className="py-2" variant="text" size="large" fullWidth onClick={() => navigate(ROUTE_PATH.project)}>Back</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
}
export default EditProject;
import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './TableItem';
import { TableContainerStyled, ValueColumnStyled, ActionColumnStyled } from './styles';
import { Grid, Typography } from '@mui/material';
import { SANTAS_GRAY } from '../../commons/constraints/colors';

function ProjectTable({projectData}){
    return (
        <TableContainerStyled className="table-container">
            <Grid container>
                <Grid item xs={7}>
                    <Typography color={SANTAS_GRAY} fontWeight="bold">Title</Typography>
                </Grid>                
                <ValueColumnStyled item xs={3}>
                    <Typography color={SANTAS_GRAY} fontWeight="bold">Total Cost</Typography>
                </ValueColumnStyled>                
                <ActionColumnStyled item xs={2}>
                    <Typography color={SANTAS_GRAY} fontWeight="bold">Actions</Typography>
                </ActionColumnStyled>
            </Grid>
            {projectData?.map(({name, description, value}) => 
                (<TableItem key={name} name={name} description={description} value={value}/>)
            )}
        </TableContainerStyled>
    )
}

ProjectTable.propTypes = {
    projectData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired
}

export default ProjectTable;
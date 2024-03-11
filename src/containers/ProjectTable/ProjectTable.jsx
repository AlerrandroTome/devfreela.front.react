import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './TableItem';
import { TableContainerStyled, ValueColumnStyled, ActionColumnStyled } from './styles';
import { Grid, Typography, Stack } from '@mui/material';
import { SANTAS_GRAY } from '../../commons/constraints/colors';

function ProjectTable({projectData, onDelete, onEdit}){
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
            {projectData?.map(({id, title, description, totalCost}) => 
                (<TableItem key={id} id={id} title={title} description={description} totalCost={totalCost} onDelete={onDelete} onEdit={onEdit} />)
            )}
            {projectData.length <= 0 && (
                <Stack className="mt-3" alignItems="center" justifyContent="center">
                    <Typography variant="h5">You don't have any projects yet.</Typography>
                </Stack>
            )}
        </TableContainerStyled>
    )
}

ProjectTable.propTypes = {
    projectData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            totalCost: PropTypes.string.isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default ProjectTable;
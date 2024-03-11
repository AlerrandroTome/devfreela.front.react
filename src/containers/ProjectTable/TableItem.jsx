import React from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton, Typography } from '@mui/material';
import { ReactComponent as PencilIcon } from '../../assets/images/icon-pencil.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/icon-trash.svg';
import { TableLineStyled, ValueColumnStyled, ActionColumnStyled } from './styles';
import { formatCurrency } from '../../commons/utils/money';

function TableItem({id, title, description, totalCost, onDelete, onEdit}){
    return (
        <TableLineStyled container>
            <Grid item xs={7}>
                <Typography variant='h6' fontWeight="bold" gutterBottom>{title}</Typography>
                <Typography variant='body1'>{description}</Typography>
            </Grid>
            <ValueColumnStyled item xs={3}>
                <Typography variant='body1' fontWeight="bold">
                    {formatCurrency(totalCost)}
                </Typography>
            </ValueColumnStyled>
            <ActionColumnStyled item xs={2}>
                <IconButton>
                    <PencilIcon onClick={() => onEdit(id)} />
                </IconButton>
                <IconButton>
                    <TrashIcon onClick={() => onDelete(id)} />
                </IconButton>
            </ActionColumnStyled>
        </TableLineStyled>
    )
}

TableItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    totalCost: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default TableItem;
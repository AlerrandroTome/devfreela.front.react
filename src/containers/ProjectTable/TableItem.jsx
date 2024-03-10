import React from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton, Typography } from '@mui/material';
import { ReactComponent as PencilIcon } from '../../assets/images/icon-pencil.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/icon-trash.svg';
import { TableLineStyled, ValueColumnStyled, ActionColumnStyled } from './styles';
import { formatCurrency } from '../../commons/utils/money';

function TableItem({name, description, value}){
    return (
        <TableLineStyled container>
            <Grid item xs={7}>
                <Typography variant='h6' fontWeight="bold" gutterBottom>{name}</Typography>
                <Typography variant='body1'>{description}</Typography>
            </Grid>
            <ValueColumnStyled item xs={3}>
                <Typography variant='body1' fontWeight="bold">
                    {formatCurrency(value)}
                </Typography>
            </ValueColumnStyled>
            <ActionColumnStyled item xs={2}>
                <IconButton>
                    <PencilIcon onClick={() => console.log("Cliquei para editar!")} />
                </IconButton>
                <IconButton>
                    <TrashIcon onClick={() => console.log("Cliquei para remover!")} />
                </IconButton>
            </ActionColumnStyled>
        </TableLineStyled>
    )
}

TableItem.protoTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default TableItem;
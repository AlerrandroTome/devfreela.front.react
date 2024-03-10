import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Button from '../Button';
import { PageTitleContainerStyled } from './styles';

function PageTitle({ title, actionButton }) {
    return(
        <PageTitleContainerStyled>
            <Typography variant='h4' fontWeight='bold'>{title}</Typography>
            {
                actionButton && (
                    <Button onClick={actionButton.action}>
                        {actionButton.label}
                    </Button>
                )
            }
        </PageTitleContainerStyled>
    );
}

PageTitle.prototype = {
    title: PropTypes.string.isRequired,
    actionButton: PropTypes.shape({
        label: PropTypes.string,
        action: PropTypes.func
    })
}

export default PageTitle;
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from '../Button';

function PageTitle({ title, actionButton }) {
    return(
        <div className="page-title-container">
            <h1>{title}</h1>
            {
                actionButton && (
                    <Button onClick={actionButton.action} label={actionButton.label} size="small"/>
                )
            }
        </div>
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
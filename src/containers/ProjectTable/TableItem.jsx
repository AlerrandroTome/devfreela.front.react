import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PencilIcon } from '../../assets/images/icon-pencil.svg';
import { ReactComponent as TrashIcon } from '../../assets/images/icon-trash.svg';
import './styles.css';

function TableItem({name, description, value}){
    return (
        <div className='row table-line'>
            <div className='col-7 description-column'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className='col-3 value-column'>
                <span>{value}</span>
            </div>
            <div className='col-2 action-column'>
                <PencilIcon onClick={() => console.log("Cliquei para editar!")} />
                <TrashIcon onClick={() => console.log("Cliquei para remover!")} />
            </div>
        </div>
    )
}

TableItem.protoTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default TableItem;
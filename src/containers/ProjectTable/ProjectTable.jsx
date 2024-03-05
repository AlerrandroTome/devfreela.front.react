import React from 'react';
import PropTypes from 'prop-types'
import TableItem from './TableItem'
import './styles.css'

function ProjectTable({projectData}){
    return (
        <div className="table-container">
            <div className="row">
                <div className="col-7 description-column">
                    <h4>Title</h4>
                </div>                
                <div className="col-3 value-column">
                    <h4>Total Cost</h4>
                </div>                
                <div className="col-2 action-column">
                    <h4>Actions</h4>
                </div>
            </div>
            {projectData?.map(({name, description, value}) => 
                (<TableItem key={name} name={name} description={description} value={value}/>)
            )}
        </div>
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
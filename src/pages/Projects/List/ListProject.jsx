import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../../commons/constraints/routes-path';
import PageTitle from '../../../components/PageTitle';
import ProjectTable from '../../../containers/ProjectTable';
import './styles.css';
import { PROJECT_DATA } from './constants'

function Index () 
{
  const navigate = useNavigate();
  const actionButtonProps = {
    label: "New Project",
    action: () => navigate(`${ROUTE_PATH.project}/new-project`)
  }

  return (
    <>
      <div className="wrapper">
        <div className="main-content">
          <PageTitle title="Projects" actionButton={actionButtonProps}/>
          <ProjectTable projectData={PROJECT_DATA}/>
        </div>
      </div>
    </>
  );
}

export default Index;

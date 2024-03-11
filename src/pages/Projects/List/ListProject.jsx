import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../../commons/constraints/routes-path';
import PageTitle from '../../../components/PageTitle';
import ProjectTable from '../../../containers/ProjectTable';
import { WrapperStyled, MainContentStyled } from './styles';
import ProjectServices from '../../../services/projects';


function ListProject () 
{
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState([]);
  const userId = localStorage.getItem('userId');

  const actionButtonProps = 
  {
    label: "New Project",
    action: () => navigate(`${ROUTE_PATH.project}/new-project`)
  }

  const onDelete = (projectId) => 
  {
    ProjectServices.deleteProject(projectId)
    .then(() => {
      alert('The project was successfully removed.');
      getProjects();
    })
    .catch((error) => alert(error));
  }

  const onEdit = (projectId) => 
  {
    navigate(`${ROUTE_PATH.project}/${projectId}`);
  }

  const getProjects = () => 
  {
    ProjectServices.getProjects()
    .then(({ data }) => {
      setProjectList(data.filter((project) => project.idClient === userId));
    })
    .catch((error) => { alert(`Request error: ${error}`);});
  }

  useEffect(() => 
  {
    if(userId === null || userId === undefined || userId === "") 
    {
        navigate(ROUTE_PATH.home);
    }
    else {
      getProjects();
    }
  }, []);

  return (
    <WrapperStyled>
      <MainContentStyled>
        <PageTitle title="Projects" actionButton={actionButtonProps}/>
        <ProjectTable projectData={projectList} onDelete={onDelete} onEdit={onEdit} />
      </MainContentStyled>
    </WrapperStyled>
  );
}

export default ListProject;

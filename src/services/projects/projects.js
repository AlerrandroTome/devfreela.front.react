import api from '../core/core-api';

const basepath = '/projects';

const projects = {
    getProjects() {
        return api.get(`${basepath}`);
    },
    getProjectById(projectId) {
        return api.get(`${basepath}/${projectId}`);
    },
    saveProjects(projectData) {
        return api.post(`${basepath}/`, { ...projectData });
    },
    deleteProject(projectId) {
        return api.delete(`${basepath}/${projectId}`);
    },
    updateProjects(projectId, projectData) {
        return api.put(`${basepath}/${projectId}`, { ...projectData });
    },
}

export default projects;
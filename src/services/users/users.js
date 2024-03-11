import api from '../core/core-api';

const basepath = '/users';

const users = {
    getUsers() {
        return api.get(`${basepath}`);
    },
    getUserById(userId) {
        return api.get(`${basepath}/${userId}`);
    },
    saveUsers(userData) {
        return api.post(`${basepath}/`, { ...userData });
    },
    deleteUser(userId) {
        return api.delete(`${basepath}/${userId}`);
    },
    updateUser(userId, userData) {
        return api.put(`${basepath}/${userId}`, { ...userData });
    },
}

export default users;
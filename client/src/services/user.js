import axios from '../utils/axios';
const userList = async () => {
    try {
        const response = await axios.get(`/api/user`);
        return response.data;

    } catch (err) {
        console.log(err, 'userlist axios get');
    }

};
const deleteUser = async (id) => {
    console.log(id);

    try {
        const response = await axios.delete(`/api/user/${id}`);
        return response;

    } catch (err) {
        console.log(err, 'deleteuser axios get');
    }

}


const whatRole = async (id) => {
    try {
        const role = await axios.get(`/api/user/role/${id}`)
        return role
    } catch (err) {
        console.log(err, 'deleteuser axios get');
    }
}

export { userList, deleteUser, whatRole };



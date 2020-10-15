const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUser = id => usersRepo.getUser(id);
const addUser = (...args) => usersRepo.addUser(...args);
const updateUser = (...args) => usersRepo.updateUser(...args);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };

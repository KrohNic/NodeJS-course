const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();
const addUser = dto => usersRepo.addUser(dto);
const getUser = id => usersRepo.getUser(id);
const updateUser = (userId, userDto) => {
  const user = usersRepo.updateUser(userId, userDto);

  if (!user) throw new Error(`Updating failed. User ${userId} not found. `);

  return user;
};
const deleteUser = async userId => {
  const isFounded = await usersRepo.deleteUser(userId);

  if (!isFounded) {
    throw new Error(`Deletion failed. User ${userId} not found. `);
  }

  await tasksService.unassignUserTasks(userId);
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };

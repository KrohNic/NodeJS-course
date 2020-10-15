const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getBy = id => tasksRepo.getBy(id);
const add = (...args) => tasksRepo.add(...args);
const update = (...args) => tasksRepo.update(...args);
const remove = id => tasksRepo.remove(id);
const removeBoardTasks = boardId => tasksRepo.removeBoardTasks(boardId);
const unassignUserTasks = userId => tasksRepo.unassignUserTasks(userId);

module.exports = {
  getAll,
  getBy,
  add,
  update,
  remove,
  removeBoardTasks,
  unassignUserTasks
};

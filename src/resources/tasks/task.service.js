const tasksRepo = require('./task.db.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const add = (boardId, dto) => tasksRepo.add({ ...dto, boardId });
const getById = taskId => tasksRepo.getById(taskId);
const update = (taskId, boardId, dto) => {
  const task = tasksRepo.update(taskId, { ...dto, boardId });

  if (!task) throw new Error(`Updating failed. Task ${taskId} not found. `);

  return task;
};
const remove = taskId => {
  const isFounded = tasksRepo.remove(taskId);

  if (!isFounded) {
    throw new Error(`Deletion failed. Task ${taskId} not found. `);
  }
};
const removeBoardsTasks = boardId => tasksRepo.removeByKey({ boardId });
const unassignUserTasks = userId =>
  tasksRepo.updateByKey({ userId }, { userId: null });

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  removeBoardsTasks,
  unassignUserTasks
};

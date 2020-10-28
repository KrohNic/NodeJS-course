const tasksRepo = require('./task.db.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const add = (boardId, dto) => tasksRepo.add({ ...dto, boardId });
const getById = (taskId, boardId) => tasksRepo.getById(taskId, boardId);
const update = (taskId, boardId, dto) => {
  const task = tasksRepo.update(taskId, { ...dto, boardId });

  if (!task) throw new Error(`Updating failed. Task ${taskId} not found. `);

  return task;
};
const remove = async (taskId, boardId) => {
  const isFounded = await tasksRepo.remove(taskId, boardId);

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

const Task = require('./task.model');
let tasks = [];

const getAll = async boardId => {
  if (boardId) return tasks.filter(task => task.boardId === boardId);

  return tasks;
};

const add = async (title, order, description, userId, boardId, columnId) => {
  const task = await new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });

  await tasks.push(task);

  return task;
};

const getBy = async id => {
  return await tasks.find(task => task.id === id);
};

const update = async (
  id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
) => {
  const i = tasks.findIndex(task => task.id === id);

  if (title) tasks[i].title = title;
  if (order) tasks[i].order = order;
  if (description) tasks[i].description = description;
  if (userId) tasks[i].userId = userId;
  if (boardId) tasks[i].boardId = boardId;
  if (columnId) tasks[i].columnId = columnId;

  return tasks[i];
};

const remove = async id => {
  tasks = tasks.filter(task => task.id !== id);

  return tasks;
};

const removeBoardTasks = async boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);

  return tasks;
};

const unassignUserTasks = async userId => {
  tasks = tasks.map(task => {
    if (task.userId === userId) task.userId = null;

    return task;
  });

  return tasks;
};

module.exports = {
  getAll,
  getBy,
  add,
  update,
  remove,
  removeBoardTasks,
  unassignUserTasks
};

const Task = require('./task.model');

const getAll = boardId => Task.find({ boardId });
const add = task => Task.create(task);
const getById = (taskId, boardId) => Task.findOne({ _id: taskId, boardId });
const update = (taskId, task) => Task.updateOne({ _id: taskId }, task);
const remove = async taskId =>
  (await Task.deleteOne({ _id: taskId })).deletedCount;
const removeByKey = async key => (await Task.deleteMany(key)).deletedCount;
const updateByKey = (key, user) => Task.updateMany(key, user);

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  removeByKey,
  updateByKey
};

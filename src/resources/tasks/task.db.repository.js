const Task = require('./task.model');

const getAll = async boardId => await Task.find({ boardId });
const add = async task => await Task.create(task);
const getById = async taskId => await Task.findById(taskId);
const update = async (taskId, task) =>
  await Task.updateOne({ _id: taskId }, task);
const remove = async taskId =>
  await (await Task.deleteOne({ _id: taskId })).deletedCount;
const removeByKey = async key => (await Task.deleteMany(key)).deletedCount;
const updateByKey = async (key, changes) => await Task.updateMany(key, changes);

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
  removeByKey,
  updateByKey
};

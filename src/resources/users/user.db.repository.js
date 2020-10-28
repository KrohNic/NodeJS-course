const User = require('./user.model');

const getAll = async () => await User.find({});
const getUser = async id => await User.findById(id);
const addUser = async user => await User.create(user);
const updateUser = async (userId, userDto) =>
  await User.updateOne({ _id: userId }, userDto);
const deleteUser = async id => (await User.deleteOne({ _id: id })).deletedCount;

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };

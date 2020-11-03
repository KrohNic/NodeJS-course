const User = require('./user.model');

const getAll = () => User.find({});
const getUser = id => User.findById(id);
const addUser = user => User.create(user);
const updateUser = (userId, userDto) =>
  User.updateOne({ _id: userId }, userDto);
const deleteUser = async id => (await User.deleteOne({ _id: id })).deletedCount;

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };

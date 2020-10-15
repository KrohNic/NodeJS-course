const User = require('./user.model');
let users = [];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return users;
};

const getUser = async id => {
  return await users.find(user => user.id === id);
};

const addUser = async (name, login, password) => {
  const user = await new User({ name, login, password });

  await users.push(user);

  return user;
};

const updateUser = async (id, name, login, password) => {
  const i = users.findIndex(user => user.id === id);

  if (name) users[i].name = name;
  if (login) users[i].login = login;
  if (password) users[i].password = password;

  return users[i];
};

const deleteUser = async id => {
  users = users.filter(user => user.id !== id);

  return users;
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };

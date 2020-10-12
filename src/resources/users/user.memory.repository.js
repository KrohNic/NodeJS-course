const User = require('./user.model');
const users = [];

users.push(new User({ name: 'John', login: 'john', password: '123qwe' }));
users.push(new User({ name: 'Ann', login: 'anna', password: 'secret' }));
users.push(new User({ name: 'Isaac', login: 'newton', password: 'apple' }));

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return users;
};

const getUser = id => {
  return users.find(user => user.id === id);
};

module.exports = { getAll, getUser };

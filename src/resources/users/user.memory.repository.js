const User = require('./user.model');

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  const users = [];
  users.push(new User({ name: 'John', login: 'john', password: '123qwe' }));
  users.push(new User({ name: 'Ann', login: 'anna', password: 'secret' }));
  users.push(new User({ name: 'Isaac', login: 'newton', password: 'apple' }));

  return users;
};

module.exports = { getAll };

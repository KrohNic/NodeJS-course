const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getBy = id => boardsRepo.getBy(id);
const add = (...args) => boardsRepo.add(...args);
const update = (...args) => boardsRepo.update(...args);
const remove = id => boardsRepo.remove(id);

module.exports = { getAll, getBy, add, update, remove };

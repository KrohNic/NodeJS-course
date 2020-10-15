const Board = require('./board.model');
let boards = [];

const getAll = async () => {
  return boards;
};

const getBy = async id => {
  return await boards.find(board => board.id === id);
};

const add = async (title, columns) => {
  const board = await new Board({ title, columns });

  await boards.push(board);

  return board;
};

const update = async (id, title, columns) => {
  const i = boards.findIndex(board => board.id === id);

  if (title) boards[i].title = title;
  if (columns) boards[i].columns = columns;

  return boards[i];
};

const remove = async id => {
  boards = boards.filter(board => board.id !== id);

  return boards;
};

module.exports = { getAll, getBy, add, update, remove };

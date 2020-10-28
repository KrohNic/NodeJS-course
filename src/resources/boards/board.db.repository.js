const Board = require('./board.model');

const getAll = async () => await Board.find({});
const getById = async boardId => await Board.findById(boardId);
const add = async board => await Board.create(board);
const update = async (boardId, dto) =>
  await Board.updateOne({ _id: boardId }, dto);
const remove = async boardId =>
  (await Board.deleteOne({ _id: boardId })).deletedCount;

module.exports = { getAll, getById, add, update, remove };

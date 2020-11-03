const Board = require('./board.model');

const getAll = () => Board.find({});
const getById = boardId => Board.findById(boardId);
const add = board => Board.create(board);
const update = (boardId, dto) => Board.updateOne({ _id: boardId }, dto);
const remove = async boardId =>
  (await Board.deleteOne({ _id: boardId })).deletedCount;

module.exports = { getAll, getById, add, update, remove };

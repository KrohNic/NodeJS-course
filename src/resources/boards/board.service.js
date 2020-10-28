const boardsRepo = require('./board.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();
const getById = boardId => boardsRepo.getById(boardId);
const add = dto => boardsRepo.add(dto);
const update = (boardId, dto) => {
  const board = boardsRepo.update(boardId, dto);

  if (!board) {
    throw new Error(`Updating failed. Board ${boardId} not found. `);
  }

  return board;
};
const remove = async boardId => {
  const isFounded = await boardsRepo.remove(boardId);

  if (!isFounded) {
    throw new Error(`Deletion failed. Board ${boardId} not found. `);
  }

  await tasksService.removeBoardsTasks(boardId);
};

module.exports = { getAll, getById, add, update, remove };

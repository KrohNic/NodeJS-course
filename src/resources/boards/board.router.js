const router = require('express').Router();
const boardService = require('./board.service');
const { errorsCatcher } = require('../../common/errorHandler');
const validator = require('../../common/validator');
const schemas = require('../../common/schemas');
const Board = require('./board.model');

router
  .route('/')
  .get(
    errorsCatcher(async (req, res) => {
      const boards = await boardService.getAll();

      res
        .status(200)
        .type('json')
        .json(boards.map(Board.toResponse));
    })
  )
  .post(
    validator('body', schemas.board),
    errorsCatcher(async (req, res) => {
      const board = await boardService.add(req.body);

      res
        .status(200)
        .type('json')
        .json(Board.toResponse(board));
    })
  );

router
  .route('/:boardId', validator('params', schemas.boardId))
  .get(
    errorsCatcher(async (req, res) => {
      const board = await boardService.getById(req.params.boardId);

      if (board) {
        res
          .status(200)
          .type('json')
          .json(Board.toResponse(board));
      } else {
        res
          .status(404)
          .type('json')
          .json({});
      }
    })
  )
  .put(
    validator('body', schemas.board),
    errorsCatcher(async (req, res) => {
      const board = await boardService.update(req.params.boardId, req.body);

      res
        .status(200)
        .type('json')
        .json(Board.toResponse(board));
    })
  )
  .delete(
    errorsCatcher(async (req, res) => {
      await boardService.remove(req.params.boardId);

      res.status(204).end();
    })
  );

module.exports = router;

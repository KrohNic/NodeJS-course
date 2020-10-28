const router = require('express').Router();
const boardService = require('./board.service');
const { errorsCatcher } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    errorsCatcher(async (req, res) => {
      const boards = await boardService.getAll();

      res
        .status(200)
        .type('json')
        .json(boards);
    })
  )
  .post(
    errorsCatcher(async (req, res) => {
      const board = await boardService.add(req.body);

      res
        .status(200)
        .type('json')
        .json(board);
    })
  );

router
  .route('/:boardId')
  .get(
    errorsCatcher(async (req, res) => {
      const board = await boardService.getById(req.params.boardId);

      if (board) {
        res
          .status(200)
          .type('json')
          .json(board);
      } else {
        res
          .status(404)
          .type('json')
          .json({});
      }
    })
  )
  .put(
    errorsCatcher(async (req, res) => {
      const board = await boardService.update(req.params.boardId, req.body);

      res
        .status(200)
        .type('json')
        .json(board);
    })
  )
  .delete(
    errorsCatcher(async (req, res) => {
      await boardService.remove(req.params.boardId);

      res.status(204).end();
    })
  );

module.exports = router;

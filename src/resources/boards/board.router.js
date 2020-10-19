const router = require('express').Router();
const boardService = require('./board.service');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardService.getAll();

    res.json(boards);
  })
  .post(async (req, res) => {
    const board = await boardService.add(req.body.title, req.body.columns);

    res
      .status(200)
      .type('json')
      .json(board);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const board = await boardService.getBy(req.params.id);

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
  .put(async (req, res) => {
    const board = await boardService.update(
      req.params.id,
      req.body.title,
      req.body.columns
    );

    res
      .status(200)
      .type('json')
      .json(board);
  })
  .delete(async (req, res) => {
    const boards = await boardService.remove(req.params.id);

    res.json(boards);
  });

module.exports = router;

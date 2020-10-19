const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');

router
  .route('/')
  .get(async (req, res) => {
    const tasks = await taskService.getAll(req.params.boardId);

    res.json(tasks);
  })
  .post(async (req, res) => {
    const task = await taskService.add(
      req.body.title,
      req.body.order,
      req.body.description,
      req.body.userId,
      req.params.boardId,
      req.body.columnId
    );

    res
      .status(200)
      .type('json')
      .json(task);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const taskId = req.params.id;
    const task = await taskService.getBy(taskId);

    if (task) {
      res
        .status(200)
        .type('json')
        .json(task);
    } else {
      res
        .status(404)
        .type('json')
        .json({});
    }
  })
  .put(async (req, res) => {
    const task = await taskService.update(
      req.params.id,
      req.body.title,
      req.body.order,
      req.body.description,
      req.body.userId,
      req.params.boardId,
      req.body.columnId
    );

    res
      .status(200)
      .type('json')
      .json(task);
  })
  .delete(async (req, res) => {
    const taskId = req.params.id;
    const tasks = await taskService.remove(taskId);

    res.json(tasks);
  });

module.exports = router;

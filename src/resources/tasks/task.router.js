const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const { errorsCatcher } = require('../../common/errorHandler');

router
  .route('/')
  .get(
    errorsCatcher(async (req, res) => {
      const tasks = await taskService.getAll(req.params.boardId);

      res
        .status(200)
        .type('json')
        .json(tasks);
    })
  )
  .post(
    errorsCatcher(async (req, res) => {
      const task = await taskService.add(req.params.boardId, req.body);

      res
        .status(200)
        .type('json')
        .json(task);
    })
  );

router
  .route('/:id')
  .get(
    errorsCatcher(async (req, res) => {
      const task = await taskService.getById(req.params.id);

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
  )
  .put(
    errorsCatcher(async (req, res) => {
      const task = await taskService.update(
        req.params.taskId,
        req.params.boardId,
        req.body
      );

      res
        .status(200)
        .type('json')
        .json(task);
    })
  )
  .delete(
    errorsCatcher(async (req, res) => {
      await taskService.remove(req.params.taskId);

      res.status(204).end();
    })
  );

module.exports = router;

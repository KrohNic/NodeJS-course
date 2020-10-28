const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');
const { errorsCatcher } = require('../../common/errorHandler');
const schemas = require('../../common/schemas');
const validator = require('../../common/validator');
const Task = require('./task.model');

router
  .route('/', validator('params', schemas.boardId))
  .get(
    errorsCatcher(async (req, res) => {
      const tasks = await taskService.getAll(req.params.boardId);

      res
        .status(200)
        .type('json')
        .json(tasks.map(Task.toResponse));
    })
  )
  .post(
    validator('body', schemas.task),
    errorsCatcher(async (req, res) => {
      const task = await taskService.add(req.params.boardId, req.body);

      res
        .status(200)
        .type('json')
        .json(Task.toResponse(task));
    })
  );

router
  .route(
    '/:taskId',
    validator('params', schemas.boardId),
    validator('params', schemas.taskId)
  )
  .get(
    errorsCatcher(async (req, res) => {
      const task = await taskService.getById(
        req.params.taskId,
        req.params.boardId
      );

      if (task) {
        res
          .status(200)
          .type('json')
          .json(Task.toResponse(task));
      } else {
        res
          .status(404)
          .type('json')
          .json({});
      }
    })
  )
  .put(
    validator('body', schemas.task),
    errorsCatcher(async (req, res) => {
      const task = await taskService.update(
        req.params.taskId,
        req.params.boardId,
        req.body
      );

      res
        .status(200)
        .type('json')
        .json(Task.toResponse(task));
    })
  )
  .delete(
    errorsCatcher(async (req, res) => {
      await taskService.remove(req.params.taskId, req.params.boardId);

      res.status(204).end();
    })
  );

module.exports = router;

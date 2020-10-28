const Joi = require('joi');
const UUID_VER = 'uuidv4';

const column = Joi.object()
  .options({
    abortEarly: true,
    allowUnknown: false
  })
  .keys({
    id: Joi.string().guid({ version: UUID_VER }),
    title: Joi.string().required(),
    order: Joi.number().required()
  });

const schemas = {
  user: Joi.object()
    .options({
      abortEarly: true,
      allowUnknown: false
    })
    .keys({
      id: Joi.string().guid({ version: UUID_VER }),
      name: Joi.string().required(),
      login: Joi.string().required(),
      password: Joi.string().required()
    }),

  board: Joi.object()
    .options({
      abortEarly: true,
      allowUnknown: false
    })
    .keys({
      _id: Joi.string().guid({ version: UUID_VER }),
      id: Joi.string().guid({ version: UUID_VER }),
      title: Joi.string().required(),
      columns: Joi.array()
        .items(column)
        .required()
    }),

  task: Joi.object()
    .options({
      abortEarly: true,
      allowUnknown: false
    })
    .keys({
      id: Joi.string().guid({ version: UUID_VER }),
      title: Joi.string().required(),
      order: Joi.number().required(),
      description: Joi.string().required(),
      userId: Joi.string()
        .allow(null)
        .guid({ version: UUID_VER })
        .required(),
      boardId: Joi.string()
        .allow(null)
        .guid({ version: UUID_VER })
        .optional(),
      columnId: Joi.string()
        .allow(null)
        .guid({ version: UUID_VER })
        .optional()
    }),

  userId: {
    id: Joi.string()
      .guid({ version: UUID_VER })
      .required()
  },

  boardId: {
    id: Joi.string()
      .guid({ version: UUID_VER })
      .required()
  },

  taskId: {
    id: Joi.string()
      .guid({ version: UUID_VER })
      .required()
  }
};

module.exports = schemas;

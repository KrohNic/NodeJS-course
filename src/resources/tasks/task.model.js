const uuid = require('uuid');
const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    _id: { type: String, default: uuid },
    title: { type: String, default: 'TASK' },
    order: { type: Number, default: 0 },
    description: { type: String, default: 'DESCRIPTION' },
    userId: { type: String, default: null },
    boardId: { type: String, default: null },
    columnId: { type: String, default: null }
  },
  { versionKey: false }
);

schema.statics.toResponse = obj => {
  const { id, title, order, description, userId, boardId, columnId } = obj;
  return { id, title, order, description, userId, boardId, columnId };
};

module.exports = model('Task', schema);

const uuid = require('uuid');
const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    _id: { type: String, default: uuid },
    name: { type: String, default: 'USER' },
    login: { type: String, default: 'user' },
    password: { type: String, default: 'P@55w0rd' }
  },
  { versionKey: false }
);

schema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

module.exports = model('User', schema);

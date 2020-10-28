const uuid = require('uuid');
const { Schema, model } = require('mongoose');

class Column {
  constructor({ id = uuid(), title, order } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static create(column) {
    return new Column(column);
  }
}

const schema = new Schema(
  {
    _id: { type: String, default: uuid },
    title: { type: String, default: uuid },
    columns: {
      type: Array,
      set: columns => columns.map(Column.create)
    }
  },
  { versionKey: false }
);

module.exports = model('Board', schema);

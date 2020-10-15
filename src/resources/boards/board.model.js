const uuid = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'COLUMN', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

class Board {
  constructor({ id = uuid(), title = 'BOARD', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(
      col => new Column({ title: col.title, order: col.order })
    );
  }
}

module.exports = Board;

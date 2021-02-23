'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  await db.createTable('fruits', {
    id: {
      autoIncrement: true,
      notNull: true,
      primaryKey: true,
      type: 'int',
      unsigned: true,
    },
    name: {
      length: 100,
      notNull: true,
      type: 'string',
      unique: true,
    },
    quantity: {
      notNull: true,
      type: 'int',
      defaultValue: 1,
    },
  });

  await db.runSql(`
    INSERT INTO fruits (quantity, name)
    VALUES
    (10, 'apples'),
    (23, 'pears'),
    (7, 'dragon fruits'),
    (99, 'grapes');
  `);
};

exports.down = function(db) {
  return db.dropTable('fruits');
};

exports._meta = {
  "version": 1
};

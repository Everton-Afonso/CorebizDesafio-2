
exports.up = function (knex) {
  return knex.schema.createTable('employee', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('wage').notNullable();
    table.string('bonus').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('employee');
};

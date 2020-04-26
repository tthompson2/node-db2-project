
exports.up = async function(knex) {

    await knex.schema.createTable("cars", (table) => {

        table.increments("id");
        table.text("name").notNull().unique();
        table.text("color").notNull();
        table.boolean("ugly").notNull().defaultToTrue();
    })
  
};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("cars");
};

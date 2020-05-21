
exports.up = async function(knex) {

    await knex.schema.createTable("cars", (table) => {

        table.increments("id");
        table.text("name").notNull().unique();
        table.text("color").notNull();
        table.text("make").notNull();
        table.text("model").notNull();
        table.boolean("ugly").notNull().defaultTo(true);
    })
  
};

exports.down = async function(knex) {
  
    await knex.schema.dropTableIfExists("cars");
};

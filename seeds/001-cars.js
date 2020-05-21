
exports.seed = async function (knex) {

  // clear out our rows
  // truncate does more than .del(), like resetting the autoincrementing ID
  await knex("cars").truncate();

  await knex("cars").insert([

    { name: "main car", color: "black", make: "hyundai", model: "elantra", ugly: true},
    { name: "second truck", color: "blue", make: "gmc", model: "1500", ugly: true},
    { name: "other", color: "grey", make: "hyundai", model: "elantra", ugly: true},
  ])


}
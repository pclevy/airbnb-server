"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PropertySchema extends Schema {
  up() {
    this.create("properties", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("title").notNullable();
      table.string("address").notNullable();
      table.decimal("price").notNullable();
      table.decimal("latitude").notNullable();
      table.decimal("longitude").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("properties");
  }
}

module.exports = PropertySchema;

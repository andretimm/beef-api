'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaceBeefSchema extends Schema {
  up() {
    this.create('place_beefs', (table) => {
      table.increments()
      table.integer('place_id')
        .unsigned()
        .references('id')
        .inTable('places')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('title').notNullable()
      table.string('un').notNullable()
      table.string('brand').nullable()
      table.decimal('price', 9, 2).notNullable()      
      table.integer('likes').notNullable().defaultTo(0)
      table.timestamps()
    })
  }

  down() {
    this.drop('place_beefs')
  }
}

module.exports = PlaceBeefSchema

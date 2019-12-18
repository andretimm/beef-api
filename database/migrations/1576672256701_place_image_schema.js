'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaceImageSchema extends Schema {
  up() {
    this.create('place_images', (table) => {
      table.increments()
      table.integer('place_id')
        .unsigned()
        .references('id')
        .inTable('places')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('place_images')
  }
}

module.exports = PlaceImageSchema

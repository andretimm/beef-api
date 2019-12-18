'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageSchema extends Schema {
  up() {
    this.create('user_images', (table) => {
      table.increments()
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('user_images')
  }
}

module.exports = UserImageSchema

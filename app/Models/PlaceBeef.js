'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PlaceBeef extends Model {
    place() {
        return this.hasOne('App/Models/Place')
    }
}

module.exports = PlaceBeef

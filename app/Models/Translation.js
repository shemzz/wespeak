'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Translation extends Model {
    language(){
        return this.hasOne('App/Models/Language')
    }
}

module.exports = Translation

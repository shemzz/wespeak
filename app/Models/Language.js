'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Language extends Model {
    category () {
        return this.belongsToMany('App/Models/Category')
    }

    subcategory () {
        return this.belongsToMany('App/Models/Subcategory')
    }
    translation (){
        return this.hasMany('App/Models/Translation')
    }

}

module.exports = Language

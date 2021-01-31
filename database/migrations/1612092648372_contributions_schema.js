'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContributionsSchema extends Schema {
  up () {
    this.create('contributions', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.integer('language_id').unsigned().notNullable()
      table.text('language_name').notNullable()
      table.integer('item_id').unsigned().notNullable()
      table.integer('subcategory_id').unsigned().notNullable()
      table.text('translation').notNullable()
      table.text('sound')
      table.timestamps()
    })
  }

  down () {
    this.drop('contributions')
  }
}

module.exports = ContributionsSchema

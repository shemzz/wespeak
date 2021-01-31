'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TranslationsSchema extends Schema {
  up () {
    this.create('translations', (table) => {
      table.increments()
      table.integer('language_id').unsigned().notNullable()
      table.text('language_name').notNullable()
      table.integer('item_id').unsigned().notNullable()
      table.integer('subcategory_id').unsigned().notNullable()
      table.text('translation').notNullable()
      table.text('sound_male')
      table.text('sound_female')
      table.text('sound')
      table.timestamps()
    })
  }

  down () {
    this.drop('translations')
  }
}

module.exports = TranslationsSchema

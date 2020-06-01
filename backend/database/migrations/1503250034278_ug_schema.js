'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UgSchema extends Schema {
  up () {
    this.create('ugs', (table) => {
      table.increments()
      table
        .string('code')
        .notNullable()
        .unique()
      table
        .string('name')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  down () {
    this.drop('ugs')
  }
}

module.exports = UgSchema

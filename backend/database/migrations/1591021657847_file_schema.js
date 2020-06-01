'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('original_name').notNullable()
      table.string('type').notNullable()
      table.string('subtype').notNullable()
      table.string('content_type').notNullable()
      table.float('size', 16, 2).notNullable()
      table.string('url').notNullable()
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema

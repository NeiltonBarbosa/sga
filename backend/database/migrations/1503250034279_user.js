'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table
        .string('name')
        .notNullable()
      table
        .string('nickname')
        .notNullable()
      table
        .string('cpf')
        .notNullable()
        .unique()
      table
        .string('email')
        .notNullable()
        .unique()
      table
        .string('password')
        .notNullable()
      table
        .boolean('active')
        .defaultTo(true)
      table
        .string('avatar_name')
      table
        .integer('department_id')
        .unsigned()
        .references('id')
        .inTable('departments')
      table
        .integer('ug_id')
        .unsigned()
        .references('id')
        .inTable('ugs')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema

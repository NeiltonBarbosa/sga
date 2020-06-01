'use strict'

class Department {
  get rules () {
    const id = this.ctx.params.id

    return {
      name: 'required',
      slug: id
        ? `required|unique:departments,slug,id,${id}`
        : 'required|unique:departments'
    }
  }

  get messages () {
    return {
      'name.required': 'Você deve fornecer um nome.',
      'slug.required': 'Você deve fornecer um slug.',
      'slug.unique': 'Slug já cadastrado.'
    }
  }
}

module.exports = Department

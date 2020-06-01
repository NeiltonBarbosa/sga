'use strict'

class Ug {
  get rules () {
    const id = this.ctx.params.id

    return {
      name: 'required',
      code: id
        ? `required|unique:ugs,code,id,${id}`
        : 'required|unique:ugs'
    }
  }

  get messages () {
    return {
      'name.required': 'Você deve fornecer um nome.',
      'code.required': 'Você deve fornecer um código.',
      'code.unique': 'Código já cadastrado.'
    }
  }
}

module.exports = Ug

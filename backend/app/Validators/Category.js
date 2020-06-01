'use strict'

class Category {
  get rules () {
    return {
      name: 'required'
    }
  }

  get messages () {
    return {
      'name.required': 'Você deve fornecer um nome.'
    }
  }
}

module.exports = Category

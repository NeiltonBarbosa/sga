'use strict'

const Category = use('App/Models/Category')

class CategoryController {
  async index ({ request, response, view }) {
    const categories = await Category.all()

    return categories
  }

  async store ({ request, response }) {
    const { name, description } = request.post()

    const category = await Category.create({
      name,
      description
    })

    return category
  }

  async show ({ params, request, response, view }) {
    const category = await Category.findOrFail(params.id)

    return category
  }

  async update ({ params, request, response }) {
    const { name, description } = request.post()

    const category = await Category.findOrFail(params.id)

    category.merge({
      name,
      description
    })

    await category.save()

    return category
  }

  async destroy ({ params, request, response }) {
    const category = await Category.findOrFail(params.id)

    await category.delete()
  }
}

module.exports = CategoryController

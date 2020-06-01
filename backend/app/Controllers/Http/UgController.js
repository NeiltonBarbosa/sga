'use strict'

const Ug = use('App/Models/Ug')

class UgController {
  async index ({ request, response, view }) {
    const { code, name, page = 1, paginate = false } = request.get()

    const query = Ug.query()

    if (code) {
      query.where('code', 'like', `%${code}%`)
    }

    if (name) {
      query.where('name', 'ilike', `%${name}%`)
    }

    return paginate ? query.paginate(page, 5) : query.fetch()
  }

  async store ({ request }) {
    const { code, name } = request.post()

    const ug = await Ug.create({
      code,
      name
    })

    return ug
  }

  async show ({ params }) {
    const ug = await Ug.findOrFail(params.id)

    return ug
  }

  async update ({ params, request }) {
    const { code, name } = request.post()

    const ug = await Ug.findOrFail(params.id)

    ug.merge({
      code,
      name
    })

    await ug.save()

    return ug
  }

  async destroy ({ params, request, response }) {
    const ug = await Ug.findOrFail(params.id)

    await ug.delete()
  }
}

module.exports = UgController

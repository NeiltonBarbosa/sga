'use strict'

const Department = use('App/Models/Department')

class DepartmentController {
  async index ({ request, response, view }) {
    const departments = await Department.all()

    return departments
  }

  async store ({ request, response }) {
    const { slug, name } = await request.post()

    const department = await Department.create({
      slug,
      name
    })

    return department
  }

  async show ({ params }) {
    const department = await Department.findOrFail(params.id)

    return department
  }

  async update ({ params, request }) {
    const { slug, name } = await request.post()

    const department = await Department.findOrFail(params.id)

    department.merge({
      slug,
      name
    })

    await department.save()

    return department
  }

  async destroy ({ params, request, response }) {
    const department = await Department.findOrFail(params.id)

    await department.delete()
  }
}

module.exports = DepartmentController

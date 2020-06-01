'use-strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, auth }) {
    const { cpf, password } = request.post()

    const { token } = await auth.attempt(cpf, password)

    const user = await User.query()
      .where('cpf', cpf)
      .with('department')
      .first()

    const role = await user.roles().first()
    user.type = role.slug

    return { token, user }
  }
}

module.exports = SessionController

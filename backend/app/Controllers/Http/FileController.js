'use strict'

const File = use('App/Models/File')
const Drive = use('Drive')

class FileController {
  async store ({ request, response, auth }) {
    await request.multipart.file('file', {}, async file => {
      try {
        const content_type = file.headers['content-type']
        const name = `${Date.now()}.${file.subtype}`
        const size = (file.stream.byteCount / 1000).toFixed(1)

        const url = await Drive.put(name, file.stream, { ContentType: content_type })

        const savedFile = await File.create({
          name,
          original_name: file.clientName,
          type: file.type,
          subtype: file.subtype,
          content_type,
          size,
          url,
          user_id: auth.user.id
        })

        return response.status(201).send(savedFile)
      } catch (err) {
        return response
          .status(err.status)
          .send({ message: 'Erro no upload do arquivo.' })
      }
    }).process()
  }

  async show ({ params, request, response, view }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = FileController

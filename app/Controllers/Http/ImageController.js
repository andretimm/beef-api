'use strict'

const Place = use('App/Models/Place')

const Helpers = use('Helpers')

class ImageController {

    async show({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.path}`))
    }

    async store({ params, request }) {
        const place = await Place.findOrFail(params.id)

        const images = request.file('image', {
            type: ['image'],
            size: '2mb'
        })

        await images.moveAll(Helpers.tmpPath('uploads'), file => ({
            name: `${Date.now()}-${file.clientName}`
        }))

        if (!images.movedAll()) {
            return images.errors();
        }

        await Promise.all(images.movedList().map(image => place.images().create({ path: image.fileName })))

    }

}

module.exports = ImageController

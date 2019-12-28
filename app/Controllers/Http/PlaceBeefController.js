'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PlaceBeef = use("App/Models/PlaceBeef");

/**
 * Resourceful controller for interacting with beefs
 */
class PlaceBeefController {
    /**
     * Show a list of all beefs.
     * GET beefs
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view, auth }) {
    }

    /**
     * Create/save a new beef.
     * POST beefs
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const data = request.only(["place_id", "title", "un", "brand", "price"]);

        const beef = await PlaceBeef.create(data);

        return beef;
    }

    /**
     * Display a single beef.
     * GET beefs/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view, auth }) {
    }

    /**
     * Update beef details.
     * PUT or PATCH beefs/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
    }

    /**
     * Delete a beef with id.
     * DELETE beefs/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
    }
}

module.exports = PlaceBeefController
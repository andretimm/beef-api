'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('users', 'UserController').apiOnly().middleware(new Map([
  [['users.index'], ['auth']],
  [['users.show'], ['auth']]
])).validator(new Map([
  [['users.store'], ['StoreUser']]
]))

Route.post('/sessions', 'SessionController.create')

Route.resource('/places', 'PlaceController').apiOnly().middleware('auth')
Route.post('places/next', 'PlaceController.next').middleware('auth')
Route.resource('/beefs', 'PlaceBeefController').apiOnly().middleware('auth')

Route.post('places/:id/images', 'ImageController.store').middleware('auth')
Route.get('images/:path', 'ImageController.show')

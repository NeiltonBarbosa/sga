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

Route.post('/sessions', 'SessionController.store')

Route.group(() => {
  Route.get('ugs', 'UgController.index')
  Route.resource('ugs', 'UgController')
    .apiOnly()
    .except('index')
    .validator(new Map([[['ugs.store', 'ugs.update'], ['Ug']]]))
    .middleware('is:administrator')

  Route.get('departments', 'DepartmentController.index')
  Route.resource('departments', 'DepartmentController')
    .apiOnly()
    .except('index')
    .validator(new Map([[['departments.store', 'departments.update'], ['Department']]]))
    .middleware('is:administrator')

  Route.get('categories', 'CategoryController.index')
  Route.resource('categories', 'CategoryController')
    .apiOnly()
    .except('index')
    .validator(new Map([[['categories.store', 'categories.update'], ['Category']]]))
    .middleware('is:administrator')
}).middleware('auth')

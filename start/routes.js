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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('add', 'LanguageController.add')

Route.get('list', 'LanguageController.list')

Route.post('add-category', 'CategoryController.add')

Route.get('categories', 'CategoryController.list')

Route.post('add-subcategory', 'SubcategoryController.add')

Route.get(':id/subcategories', 'SubcategoryController.list')

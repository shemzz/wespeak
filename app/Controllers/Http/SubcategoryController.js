'use strict'

const Subcat = use("App/Models/Subcategory")
const Database = use('Database')

class SubcategoryController {
     // add sub category
  async add ({ request, response }) {

    const addCat = await Subcat.create({
        cat_id: request.input('category_id'),
      title: request.input('title'),
      slug: request.input('slug')
  })

  return response.json({
      status: 'success',
      message: 'Subcategory add Successfull!',
      data: addCat
  })

}
  async list ({params, response}) {
   const categories =  await Database.from('subcategories').where('cat_id', params.id)
      return  response.json({
          status: 'success',
          data: categories
      })
  }
}

module.exports = SubcategoryController

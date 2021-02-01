'use strict'

const Category = use("App/Models/Category")

class CategoryController {
     // add category
  async add ({ request, response }) {

    const addCat = await Category.create({
      title: request.input('title'),
      slug: request.input('slug')
  })

  return response.json({
      status: 'success',
      message: 'Category added successfully!',
      data: addCat
  })

}
  async list ({ response}) {
      const categories = await Category.all()
      return  response.json({
          status: 'success',
          data: categories
      })
  }
}

module.exports = CategoryController

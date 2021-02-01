'use strict'

const Language = use('App/Models/Language')

class LanguageController {
  // add language
  async add ({ request, response }) {
      // Save booking details to database
    const addLang = await Language.findorCreate({
        name: request.input('name')
    })

    return response.json({
        status: 'success',
        message: 'Adding Successfull!',
        data: addLang
    })

}
    async list ({ response}) {
        const languages = await Language.all()
        return  response.json({
            status: 'success',
            data: languages
        })
    }

}

module.exports = LanguageController

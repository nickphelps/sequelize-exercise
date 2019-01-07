const models = require('./models')

const prompt = require('prompt-promise')

prompt('Artist Name?')
    .then(function (artistName) {
        return models.Artist.create({
            name: artistName
        })
    })
    .then(function (result) {
        //result is the database object
        console.log(result.id)
    })
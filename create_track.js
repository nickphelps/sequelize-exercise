const models = require('./models')

const prompt = require('prompt-promise')

prompt('Track Name?')
    .then(function (trackName) {
        return models.Tracks.create({
            name: trackName
        })
    })
    .then(function (result) {
        //result is the database object
        console.log(result.id)
    })
const fs= require('fs')

const {derived} = require('../modules/derived')


function writeFile(){
    derived.insert()
    derived.delete()

}

module.exports ={writeFile}
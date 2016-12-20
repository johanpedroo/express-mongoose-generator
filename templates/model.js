const mongoose = require('mongoose')

let Schema = mongoose.Schema

const fields = {fields}

let {schemaName} = new Schema(fields)

module.exports = mongoose.model('{modelName}', {schemaName})

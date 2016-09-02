const mongoose = require('mongoose');

let Schema   = mongoose.Schema;

let fields = {fields}

let {schemaName} = new Schema(fields);

module.exports = mongoose.model('{modelName}', {schemaName});

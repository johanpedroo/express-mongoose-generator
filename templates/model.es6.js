import mongoose, { Schema } from 'mongoose';

const fields = {fields}

let {schemaName} = new Schema(fields)

export default mongoose.model('{modelName}', {schemaName})

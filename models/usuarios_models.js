import Usuario from "../schemas/usuarios_schemas.js"
import mongoose from "mongoose"

class usuariosModels {
    async getByEmail(email) {
        return await Usuario.findOne({ email })
    }

    async create(usuario) {
        return await Usuario.create(usuario)
    }

    async getById(id) {
        return await Usuario.findOne({ _id: new mongoose.Types.ObjectId(id) })
    }

    async delete(id) {
        return await Usuario.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
    }

    async put(id, claveNueva) {
        return await Usuario.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, { clave: claveNueva }, { new: true })
    }

}

export default new usuariosModels();
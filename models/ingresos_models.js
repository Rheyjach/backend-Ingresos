import Ingreso from "../schemas/ingresos_schemas.js"
import mongoose from "mongoose"

class ingresosModels {

    async getAll(idUsuario) {
        return await Ingreso.find({ user: new mongoose.Types.ObjectId(idUsuario) })
    }

    async create(ingreso) {
        return await Ingreso.create(ingreso)
    }

    async put(idIngreso, ingreso) {
        return await Ingreso.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(idIngreso) }, ingreso, { new: true })
    }

    async deleteOne(idIngreso) {
        return await Ingreso.findOneAndDelete({ _id: new mongoose.Types.ObjectId(idIngreso) })
    }

    async deleteAll(idUsuario) {
        return await Ingreso.deleteMany({ user: new mongoose.Types.ObjectId(idUsuario) })
    }

}


export default new ingresosModels();
import mongoose from "mongoose";

const ingresoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    valor: {
        type: Number,
        trim: true,
        required: true
    },
    categoria: {
        type: String,
        trim: true,
        required: true
    },
    user: {
        type:mongoose.Types.ObjectId,
        required:true,
        trim:true,
        ref:"usuarios_ingresos"
    }
}, { timestamps: true })

export default mongoose.model("ingresos",ingresoSchema)
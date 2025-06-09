import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Correo inválido']
    },
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    clave: {
        type: String,
        trim: true,
        required: true,
        minlength: [4, "La contraseña debe ser de minimo 4 caracteres"]
    }
}, { timestamps: true })


export default mongoose.model("usuarios_ingresos", usuarioSchema)
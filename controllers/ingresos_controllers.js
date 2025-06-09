import ingresosModels from "../models/ingresos_models.js";


class ingresosControllers {

    async getAll(req, res) {
        try {
            const data = await ingresosModels.getAll(req.idAutenticado)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async create(req, res) {
        try {
            const { nombre, valor, categoria } = req.body
            const data = await ingresosModels.create({
                nombre,
                valor,
                categoria,
                user: req.idAutenticado
            })
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async put(req, res) {
        try {
            const { id } = req.params
            const data = await ingresosModels.put(id, req.body)
            if (!data) {
                throw new Error("No se encontro el ingreso para ser actualizado");

            }
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteOne(req, res) {
        try {
            const { id } = req.params
            const data = await ingresosModels.deleteOne(id)
            if (!data) {
                throw new Error("No se encontro el ingreso para ser eliminado");

            }
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    async deleteAll(req, res) {
        try {
            const data = await ingresosModels.deleteAll(req.idAutenticado)
            if(data.deletedCount === 0){
                return res.status(404).json({error:"No habia datos que eliminar"})
            }
            res.status(200).json({message:"Información del usuario eliminada exitosamente"})

        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

}

export default new ingresosControllers();
import express from "express"
import { verificarToken } from "../helpers/autenticacion.js"
import ingresosControllers from "../controllers/ingresos_controllers.js"

const ingresosRoutes= express.Router()

ingresosRoutes.get("/",verificarToken,ingresosControllers.getAll)
ingresosRoutes.post("/",verificarToken,ingresosControllers.create)
ingresosRoutes.put("/:id",verificarToken,ingresosControllers.put)
ingresosRoutes.delete("/:id",verificarToken,ingresosControllers.deleteOne)
ingresosRoutes.delete("/",verificarToken,ingresosControllers.deleteAll)


export default ingresosRoutes



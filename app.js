import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"
import cors from "cors"
import usuariosRoutes from "./routes/usuarios_routes.js"
import ingresosRoutes from "./routes/ingresos_routes.js"
import dataBase from "./config/dataBase.js"

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use("/ingresos/usuarios", usuariosRoutes)
app.use("/ingresos/crud", ingresosRoutes)
app.get("/", (req, res) => {
    res.send("Backend funcionando correctamente");
});

try {
    const port = process.env.port || 5100
    app.listen(port, () => console.log(`Servidor conectado en el puerto ${port}`))
} catch (error) {
    console.error(`No se pudo conectar al servidor: ${error.message}`)
}


process.on("SIGINT", async () => {
    await dataBase.desconectarDataBase()
    process.exit(0)
})
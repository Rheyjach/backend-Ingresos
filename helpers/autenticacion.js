import jsonwebtoken from "jsonwebtoken"
import "dotenv/config"

export function generarToken(id) {
    return jsonwebtoken.sign({ id }, process.env.secret_token, { expiresIn: "2h" })
}

export function verificarToken(req, res, next) {
    const { token } = req.cookies
    if(!token){
        return res.status(404).json({error:"Token no encontrado"})
    }
    try {
        const verificarToken=jsonwebtoken.verify(token,process.env.secret_token)
        req.idAutenticado=verificarToken.id
        next()
    } catch (error) {
        res.status(401).json({error:"Token no valido"})
    }
}
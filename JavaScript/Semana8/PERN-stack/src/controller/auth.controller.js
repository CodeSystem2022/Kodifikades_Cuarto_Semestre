import { pool } from "../db.js"


export const signin = (req, res) => res.send('ingresando');

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {


        const token = await createAccessToken({id: result.rows[0].id });
        console.log(result);
        res.cookie("token", token,{
            httpOnly: true,
            secure: false,
            samSite: "none",
            maxAge: 60 *60 *24 * 1000,}) // 1day})
        return res.json(result.rows[0]);
    } catch (error) {
        if(error.code === "23505"){
            return res.status(400).json({message: "El correo ya esta registrado"})
        }

    }
};
export const signout = (req, res) => res.send('Cerrando sesion');

export const profile = (req, res) => res.send('Perfil del usuario');
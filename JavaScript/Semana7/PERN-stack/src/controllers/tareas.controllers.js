import { pool } from '../db.js';

export const listarTareas = async (req, res) => {
	try {
		const result = await pool.query('SELECT FROM * tareas');
		res.status(200).json({ result });
	} catch (error) {
		res.status(400).json({ result });
	}
};

export const listarTarea = (req, res) => res.send('obteniendo tarea unica');

export const crearTarea = (req, res) => res.send('creando tareas');

export const actualizarTarea = async (req, res) => {
    const {titulo, descripcion } = req.body;
    const id = req.params.id;
    const result = await pool.query('UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id= $3 RETURNING *' , [titulo, descripcion, id]);

    if (result.rowCount === 0) {
        return res.status(404).json({
            message: 'No existe una tarea con ese id'
        });
    }
    return res.json(result.rows[0]);
}

export const elimiarTarea = (req, res) => res.send('eliminando tarea unica');

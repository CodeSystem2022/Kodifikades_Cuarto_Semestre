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

export const actualizarTarea = (req, res) => res.send('actualizando tareas');

export const elimiarTarea = (req, res) => res.send('eliminando tarea unica');

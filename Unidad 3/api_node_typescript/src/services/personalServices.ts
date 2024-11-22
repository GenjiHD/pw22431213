import {Personal,PersonalNuevo} from '../services/typesPersonal';
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pw2024"
});

export const getPersonal = async () => {
    try{
        const [results] = await connection.query('SELECT * FROM personal');
        return results;
    }catch(err){
        return {error: "No se pudo obtener el personal"};
    }
};

export const encuentraPersonal = async (id:number) => {
    try{
        const [results] = await connection.query('SELECT * FROM personal WHERE id = ? LIMIT 1', id);
        return results;
    }catch(err){
        return {error: "No se encuentra ese personal;"}
    }
};

export const agregarPersonal = async (nuevo:PersonalNuevo) => {
    try{
        const [results] = await connection.query('INSERT INTO personal(nombre,direccion,telefono,estatus) values(?,?,?,?)',[nuevo.nombre,nuevo.direccion,nuevo.telefono,nuevo.estatus]);
        return results;
    }catch(err){
        return {error: "No se puede agregar al personal"};
    }
};

export const modificarPersonal = async (modificado:Personal) => {
    try{
        const [result] = await connection.query('UPDATE personal SET nombre=?, direccion=?, telefono=?, estatus=? WHERE id=?',[modificado.nombre, modificado.direccion, modificado.telefono, modificado.estatus, modificado.id]);
        return result;
    }catch(err){
        return {error: "No se puede modificar"};
    }
};

export const borrarPersonal = async (id:Number) => {
    try{
        const [results] = await connection.query('DELETE FROM personal WHERE id=?',[id]);
        return results;
    }catch(err){
        return {error: "No se puede borrar el personal"};
    }
}
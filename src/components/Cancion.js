import connection from './connection.js';
import { ObjectId } from 'mongodb';

async function getCanciones() {
    const clientMongo = await connection.getConnection();
    console.log(clientMongo);
    const canciones = await clientMongo.db('')
        .collection('canciones')
        .find()
        .toArray();
    return canciones;
}

async function getCancion(id) {
    const clientmongo = await connection.getConnection();
    const cancion = await clientmongo.db('')
        .collection('canciones')
        .findOne({ _id: new ObjectId(id) });
    return cancion;
}

async function addCancion(cancion) {
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('')
        .collection('canciones')
        .insertOne(cancion);
    return result;
}

async function updateCancion(cancion) {
    const clientmongo = await connection.getConnection();
    const query = { _id: new ObjectId(user._id) };
    const newvalues = {
        $set: {
            nombre: user.nombre,
            genero: user.genero,
            dificultad: user.dificultad,
            tiempo: user.tiempo,
            imagen: user.imagen,
            porcentaje:user.porcentaje,
            popularidad:user.popularidad
        }
    };

    const result = await clientmongo.db('')
        .collection('canciones')
        .updateOne(query, newvalues);
    return result;
}

async function deleteCancion(id) {
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('')
        .collection('cancion')
        .deleteOne({ _id: new ObjectId(id) });
    return result;
}

export default { getCancion, getCanciones, addCancion, updateCancion, deleteCancion };

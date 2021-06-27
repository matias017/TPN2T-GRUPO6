const fs = require('fs').promises;
const path= './data/browser.json';

async function getCanciones(){
    const canciones = await fs.readFile(path, 'utf-8');
    return JSON.parse(canciones);
}

async function getCancion(id){
    const canciones = await getCanciones();
    return canciones.find(cancion => cancion._id == id);
}


async function addCancion(cancion){
    const canciones = await getCanciones();
    canciones.sort((a,b)=> a._id - b._id);
    const lastId = canciones[canciones.length-1]._id;
    cancion._id = lastId + 1;
    canciones.push(cancion);
    await fs.writeFile(path, JSON.stringify(canciones, null, ' '));

    return cancion;
}

async function updateCancion(cancion){
    const canciones = await getCanciones();
    const index = canciones.findIndex(inv => inv._id == cancion._id);
    if(cancion.first){
        canciones[index].first = cancion.first;
    }
    if(cancion.last){
        canciones[index].last = cancion.last;
    }
    if(cancion.year){
        canciones[index].year = cancion.year;
    }
    await fs.writeFile(path, JSON.stringify(canciones, null, ' '));

    return canciones[index];
}

async function deleteCancion(id){
    const canciones = await getCanciones();
    const index = canciones.findIndex(inv => inv._id == id);
    canciones.splice(index,1);
    await fs.writeFile(path, JSON.stringify(canciones, null, ' ')); 
}

module.exports = {getCancion, getCanciones, addCancion, updateCancion, deleteCancion};

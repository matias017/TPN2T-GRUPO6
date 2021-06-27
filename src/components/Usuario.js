const fs = require('fs').promises;
const path= './data/usuario.json';

async function getUsuarios(){
    const usuarios = await fs.readFile(path, 'utf-8');
    return JSON.parse(usuarios);
}

async function getUsuaio(id){
    const usuarios = await getUsuarios();
    return usuarios.filters(usuario => usuario._id == id);
}


async function addUsuario(usuario){
    const usuarios = await getUsuarios();
    usuarios.sort((a,b)=> a._id - b._id);
    const lastId = usuarios[usuarios.length-1]._id;
    usuario._id = lastId + 1;
    usuarios.push(usuario);
    await fs.writeFile(path, JSON.stringify(usuarios, null, ' '));

    return usuario;
}

async function updateUsuario(usuario){
    const usuarios = await getUsuarios();
    const index = usuarios.findIndex(inv => inv._id == usuario._id);
    if(usuario.nombre){
        usuarios[index].first = usuario.nombre;
    }
    if(usuario.nombreUsuario){
        usuarios[index].last = usuario.nombreUsuario;
    }
    if(usuario.contraseña){
        usuarios[index].year = usuario.contraseña;
    }
    await fs.writeFile(path, JSON.stringify(usuarios, null, ' '));

    return usuarios[index];
}

async function deleteUsuario(id){
    const usuarios = await getUsuarios();
    const index = usuarios.findIndex(user => user._id == id);
    usuarios.splice(index,1);
    await fs.writeFile(path, JSON.stringify(usuarios, null, ' ')); 
}

async function getNombre(id){
    const usuarios = await getUsuarios();
    const usuario= usuarios.find(usuario => usuario._id == id);
     return usuario._id;
}

async function UsuarioValido(username) {
  let user={};
  let i=0;
    for(i=0;i<path.length;i++){
      if(path[i].getNombre(i)==username){
        user=path[i];
      }
    }

    return user._id;
}

exports.default = {getUsuaio, getUsuarios, addUsuario, updateUsuario, deleteUsuario,UsuarioValido,getNombre};

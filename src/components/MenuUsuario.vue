
<template>
  <b-container fluid class="p-4 bg-dark">
    <ul class="b">
      <div id="formContent" >
        
          
          <h4> Bienvenidos al Menu de usuario, aqui se encuenta las estadisiticas personales</h4>
          <div >
            <li><label >Nombre de usuario:  {{nombreUsuario}}</label></li>
            <h7>{{buscarUsuario()}}</h7>
           <li> <label> Nivel de usuario:  {{this.usuario.nivel}} </label></li>
           <li> <label >cantidad de canciones del usuario:  {{this.cant}}</label></li>
           <li> <label >cantidad de minutos del usuario:  {{this.usuario.minutos}}</label></li>
           <li> <label >canciones del usuario:  {{this.usuario.canciones}}</label></li>
      </div>

      <div><router-link class="button" to="/MisPracticas">ir a Mis Practicas </router-link></div>
    </div>
    </ul>
  </b-container>
</template>

<script>
import axios from 'axios';
    const fs = require('fs').promises;
const path= './components/usuario.json';
export default{
props:{
 nombreUsuario:{
   type:String,
   default:"nombreUsuario2",
 }
 },

  
 //async created(){
//this.usuario=await this.getUsuario(this.nombreUsuario);
 //},
  data(){
   
 
  return {
    usuario:'',
    usuarios:[],
    cant:''
    }
  },

    methods: {
      
    
      
//i=0;i<path.length;i++
       buscarUsuario() {
let i =0;
  let aray=[];
     this.getUsuarios();
    for( i in this.usuarios){
      let us=this.usuarios[i].nombreUsuario;
      aray.push(us)
    }
       let e=aray.indexOf(this.nombreUsuario)
      if(this.usuarios[e]>=0){
        this.usuario=this.usuarios[e];
        console.log("paso bien");
      }else {
        console.log("paso mal" + e );
      this.usuario=this.usuarios[e];
      }

//this.nivel=this.usuario.nivel
this.cant=this.usuario.canciones.length+1
},

async  getUsuarios(){
   try{ let response  = await axios.get("https://60d7b108307c300017a5f974.mockapi.io/usuarios/usuarios");
    this.usuarios=response.data;
    console.log("paso bien")
}catch(error){
  console.log(error)
}
},
    
 






async addUsuarios (usuario){
    const usuarios = await this.getUsuarios();
    usuarios.sort((a,b)=> a._id - b._id);
    const lastId = usuarios[usuarios.length-1]._id;
    usuario._id = lastId + 1;
    this.usuarios.push(usuario);
    await fs.writeFile(path, JSON.stringify(usuarios, null, ' '));

    return usuario;
},
async  getNombre (id){
    const usuarios = await this.getUsuarios();
    const usuario= usuarios.find(usuario => usuario._id == id);
     return usuario._id;
},

async  buscarusu (nombreUsuario) {
 let user="";

    for(let i=0;i<path.length;i++){
      if(path[i].this.nombreUsuario==nombreUsuario){
         user=path[i];
      }
    }

    return user;
}
    }
};
 </script>
 <style >
 ul.b {
  list-style-position: inside;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.button {
  background-color: #131413;
  border: none;
  color: blue;
  padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: blue;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 50px 90px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}
 </style>
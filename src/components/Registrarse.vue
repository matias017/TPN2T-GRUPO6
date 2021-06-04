<template>
<b-container fluid class="p-4 bg-dark">
<div>
  <form>
       <h1>Registrate Aqui</h1>
    <div>
    <b-row>
      <b-col md="6">
       <b-form-input type="text" placeholder="Ingrese su nombre" v-model="nombre" :state="comprobar"></b-form-input>
        <small>Minimo 3 carateres</small>
      </b-col>
    </b-row>
    </div>
    <div>
     <b-row>
      <b-col md="6">
       <b-form-input type="text" placeholder="Ingrese su apellido" v-model="apellido" :state="comprobar"></b-form-input>
        <small>Minimo 3 carateres</small>
      </b-col>
    </b-row>
    </div>
    <div>
    <b-row>
      <b-col md="6">
       <b-form-input type="text" placeholder="Ingrese un nombre de usuario" v-model="nombre" :state="comprobar"></b-form-input>
        <small>Minimo 3 carateres</small>
      </b-col>
    </b-row>
    </div>
    <div>
    <b-row>
      <b-col md="6">
       <b-form-input type="text" placeholder="Ingrese una contraseña" v-model="nombre" :state="comprobar"></b-form-input>
        <small>Minimo 4 carateres</small>
      </b-col>
    </b-row>
    </div>
    <div>
    <b-row>
      <b-col md="6">
       <b-form-input type="text" placeholder="repita la contraseña" v-model="nombre" :state="comprobar"></b-form-input>
        <small>contraseña tiene que ser similares</small>
      </b-col>
    </b-row>
    </div>
  </form>
    <p>texto: {{ texto }}</p>
</div>
<div>  <router-link to ="/">home </router-link>   </div>
</b-container>
</template>
  
<script>

export default {
  name: "Login",
  data(){
      return {
        nombre: '',
        apellido:''
      }
    },
    computed:{
      comprobar(){
        return this.nombre.length>2 && this.apellido.length>2 ? true : false
      }
    }
  
};
</script>

<style></style>
<template>
<b-container>  
      <b-nav card-header pills>
        <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
        <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
        <b-nav-item :to="{ name: 'About' }" exact exact-active-class="active">About</b-nav-item>
        <b-nav-item :to="{ name: 'Login' }" exact exact-active-class="active">Login</b-nav-item>
        <b-nav-item :to="{ name: 'Registrarse' }" exact exact-active-class="active">Registrarse</b-nav-item>
        <b-nav-item :to="{ name: 'MenuUsuario' }" exact exact-active-class="active">MenuUsuario</b-nav-item>
        <b-nav-item :to="{ name: 'MisPracticas' }" exact exact-active-class="active">Mis Practicas</b-nav-item>
        <b-nav-item :to="{ name: 'LasMasPracticadas' }" exact exact-active-class="active">Favoritas</b-nav-item>
      </b-nav>
 
        
      <router-view></router-view>
        </b-container>
   
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #476c90;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #eb502a;
  background-color: rgb(255, 187, 0);
}
</style>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
};
</script>

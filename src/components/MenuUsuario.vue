
<template>
<b-container fluid class="p-4 bg-dark">
<div>
    <div>  <router-link to ="/">home </router-link>   </div>
    
  <form>
    <div>

        <div id ="app-2">
          <p1 v-bind ="menssage"> </p1>
      
        </div>
    
    </div>
    
  </form>
    
</div>

</b-container>
</template>

<script>
import cancion from '../components/cancion.js';
  //var app2= new vue();
    //app2
    export default({
      
    }) ({
  el: '#app-2',
  data: {
    message: 'su nivel es ' + cancion.getNivel()
  }
})   
 </script>
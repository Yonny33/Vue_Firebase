<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <inicio-component v-if='logon' v-show="logon" @salir="ingresoCorrecto" :us="states"></inicio-component>
      </div>
    </div>
    <div class="container">
      <div class="row">        
        <login-component v-if='!logon' @ingresarCorrecto="ingreso" @ingresarValid="ingresoCorrecto"></login-component>
      </div>
    </div>
  </div>
</template>

<script>
import firebase  from 'firebase';
import LoginComponent from './components/login';
import InicioComponent from './components/inicio';

export default {
  name: 'App',
  data: function(){
    return{
      logon: false,
      firebase: '',
      db:''
    }
  },
  beforeMount: function(){
    this.firebase=firebase;
  },
  methods: {
    ingreso: function(){
      this.logon = true;
    },
    ingresoCorrecto: function(e){//valida si esta iniciado la sesion o no.. 
      this.logon = e.vacio
    },
    states: (collback)=>{
      firebase.auth().onAuthStateChanged((user)=>{
        collback(user)
      })
    }
  },
  components: {
    LoginComponent,
    InicioComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: rgba(175,224,41,1);
  background: -moz-radial-gradient(center, ellipse cover, rgba(175,224,41,1) 0%, rgba(115,187,48,1) 50%, rgba(115,187,48,1) 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(175,224,41,1)), color-stop(50%, rgba(115,187,48,1)), color-stop(100%, rgba(115,187,48,1)));
  background: -webkit-radial-gradient(center, ellipse cover, rgba(175,224,41,1) 0%, rgba(115,187,48,1) 50%, rgba(115,187,48,1) 100%);
  background: -o-radial-gradient(center, ellipse cover, rgba(175,224,41,1) 0%, rgba(115,187,48,1) 50%, rgba(115,187,48,1) 100%);
  background: -ms-radial-gradient(center, ellipse cover, rgba(175,224,41,1) 0%, rgba(115,187,48,1) 50%, rgba(115,187,48,1) 100%);
  background: radial-gradient(ellipse at center, rgba(175,224,41,1) 0%, rgba(115,187,48,1) 50%, rgba(115,187,48,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#afe029', endColorstr='#73bb30', GradientType=1 );
}
</style>

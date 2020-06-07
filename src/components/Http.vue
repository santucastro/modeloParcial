<template>

  <section class="src-components-http">
    <div class="jumbotron mt-3">
      <div class="media alert alert-info mt-4" v-for="(usuario, index) in this.$store.state.contactos" :key="index">
        <div class="media-body ml-3">
          <h4><u>Usuario {{ index  + 1}} - ID: {{ usuario.id }} - creado: {{ usuario.createdAt }}</u></h4>
          <br>
          <p>Nombre: <b>{{ usuario.nombre | pasarAminuscula | pasarMayus}}</b></p>
          <p>apellido: <b>{{ usuario.apellido | pasarAminuscula | pasarMayus}}</b></p>
          <p>edad: {{ usuario.edad }}</p>
          <p>direccion: <i>{{ usuario.direccion }}</i></p>
          <p>email: <i><u>{{ usuario.email }}</u></i></p>
          <p>telefono: <i><u>{{ usuario.telefono }}</u></i></p>
          <button class="btn btn-danger m-3" @click="deleteUsuario(usuario.id)">DELETE</button>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  import { urlUsuarios } from '../urls'

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
      this.getUsuarios()
    },
    data () {
      return {
     /*    usuarios : [] */
      }
    },
    methods: {
      /* --------------- */
      /* API REST -> GET */
      /* --------------- */
      getUsuarios() {
        this.axios(urlUsuarios)
        .then( res => {
          this.$store.dispatch('getUsuarios',res.data)
          console.log(res.data)
    /*       this.usuarios = res.data */
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)
        })
      },
  
      /* API REST -> DELETE */
      /* ------------------ */
      deleteUsuario(id) {
        this.axios.delete(urlUsuarios+id)
        .then( res => {
          this.$store.dispatch('deleteUsuario',id)
          console.log(res.data)
        /*   let offset = this.usuarios.findIndex(usuario => usuario.id == id)
          //delete usuarios[offset]
          this.usuarios.splice(offset, 1)
        } */
        })
        .catch(error => {
          console.log('ERROR DELETE HTTP', error)
        })
      }
    },
    computed: {
    }
}

</script>

<style scoped lang="css">
  .src-components-http {

  }

  .jumbotron {
    background-color: rgb(115, 61, 165);
    color: white;
  }

  hr {
    background-color: white;
  }
</style>
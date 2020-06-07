<template>

  <section class="src-components-http">
    <div class="jumbotron mt-3">
     <table class="table">
        <thead>
          <tr>
            <th class="text-white">ID</th>
            <th class="text-white">Nombre</th>
            <th class="text-white">Apellido</th>
            <th class="text-white">Edad</th>
            <th class="text-white">Dirección</th>
            <th class="text-white">Telefono</th>
            <th class="text-white">Correo Electrónico</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in this.$store.state.contactos" :key="index">
            <td class="text-white" scope="row">{{ usuario.id }}</td>
            <td class="text-white">{{usuario.nombre |pasarAminuscula |pasarMayus }}</td>
            <td class="text-white">{{usuario.apellido |pasarAminuscula |pasarMayus}}</td>
            <td class="text-white">{{usuario.edad}}</td>
            <td class="text-white">{{usuario.direccion}}</td>
            <td class="text-white">{{usuario.telefono}}</td>
            <td class="text-white">{{usuario.email}}</td>
            <td class="text-white"> <button class="btn btn-danger" @click="deleteUsuario(usuario.id)">X</button> </td>
          </tr>
        </tbody>

      </table> 
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
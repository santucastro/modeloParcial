<template>
  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
      <h2>Formulario de Alta</h2>
      <hr />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            autocomplete="off"
            name="nombre"
            v-model.trim="formData.nombre"
            required
            no-espacios
            :minlength="nombreChrMin"
            :maxlength="nombreChrMax"
          />
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
            <div
              slot="no-espacios"
              class="alert alert-danger my-1"
            >No se permiten espacios intermedios en este campo</div>
            <div
              slot="minlength"
              class="alert alert-danger my-1"
            >Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
            <div
              v-if="formData.nombre.length == nombreChrMax"
              class="alert alert-danger my-1"
            >Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            class="form-control"
            autocomplete="off"
            name="apellido"
            v-model.trim="formData.apellido"
            required
          />
          <field-messages name="apellido" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo apellido requerido</div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            class="form-control"
            autocomplete="off"
            name="edad"
            v-model.number="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
          />
          <field-messages name="edad" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo edad requerido</div>
            <div slot="min" class="alert alert-danger my-1">La edad minima es de {{edadMin}} años</div>
            <div slot="max" class="alert alert-danger my-1">La edad máxima es de {{edadMax}} años</div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="direccion">Direccion</label>
          <input
            type="text"
            id="direccion"
            class="form-control"
            autocomplete="off"
            name="direccion"
            v-model="formData.direccion"
            required
          />
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo direccion requerido</div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            autocomplete="off"
            name="email"
            v-model="formData.email"
            required
          />

          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
            <div slot="email" class="alert alert-danger my-1">Email no válido</div>
          </field-messages>
        </validate>
        <br />

         <validate tag="div">
          <label for="telefono">Telefono</label>
          <input
            type="text"
            id="telefono"
            class="form-control"
            autocomplete="off"
            name="telefono"
            v-model.trim="formData.telefono"
            required
            no-espacios
            :minlength="nombreChrMin"
            :maxlength="nombreChrMax"
          />
          <field-messages name="telefono" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo telefono requerido</div>
            <div
              slot="no-espacios"
              class="alert alert-danger my-1"
            >No se permiten espacios intermedios en este campo</div>
            <div
              slot="minlength"
              class="alert alert-danger my-1"
            >Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
            <div
              v-if="formData.nombre.length == nombreChrMax"
              class="alert alert-danger my-1"
            >Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
          </field-messages>
        </validate>
        <br />

        <!-- <button class="btn btn-success my-4" :disabled="enviando" type="submit">Enviar</button> -->
        <button
          class="btn btn-success my-4"
          :disabled="formState.$invalid || enviando"
          type="submit"
        >Enviar</button>
      </vue-form>

      <!-- <pre>{{formState}}</pre> -->
    </div>
  </section>
</template>

<script lang="js">

import { urlPosts } from '../urls'

export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formState : {},
      formData : this.getInitialData(),
      enviando: false,
      edadMin: 18,
      edadMax: 120,
      nombreChrMin: 5,
      nombreChrMax: 15
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

    getInitialData() {
      return {
        nombre: '',
        apellido: '',
        edad: '',
        direccion: '',
        email: '',
        telefono:''
      }
    },
    enviar() {
      this.enviando = true
      console.log(this.formData)

      /* ------------------------ */
      /* ENVIO DE DATOS CON AXIOS */
      /* ------------------------ */
      this.axios.post(urlPosts, this.formData, {
        'content-type' : 'application/json'
      })
      .then( res => {
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset()
        this.enviando = false
      })
      .catch(error => {
        console.log('ERROR POST', error)
        this.enviando = false
      })

      setTimeout(() => {
        this.enviando = false
      },10000)
    }
  }

}


</script>

<style scoped lang="css">
.src-components-formulario {
}
.jumbotron {
  background-color: rgb(173, 35, 62);
  color: white;
}

hr {
  background-color: white;
}

pre {
  color: white;
}
</style>

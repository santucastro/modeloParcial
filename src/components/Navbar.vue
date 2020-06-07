<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/">
        <!-- <a class="navbar-brand" href="#">Inicio {{ contador }}</a> -->
        <!-- <a class="navbar-brand" href="#">Inicio {{ $store.state.contador }}</a> -->
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/formulario" tag="li">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/http" tag="li">
              <a class="nav-link" href="#">Lista de Usuarios</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: { ir() {
       
        this.$router.push({
          path: '/contador2',
          name: 'contador',
          params: {valorInicial: 600, estilo: 'warning', colorDeFondo: 'green', titulo: 'CONTADOR ROUTER'},
          query: {param1: 'Hola', param2: 'Mundo'}
        })
      },
      go(num) {
        this.$router.go(num)
      },
      forward() {
        this.$router.forward()
      },
      back() {
        this.$router.back()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>

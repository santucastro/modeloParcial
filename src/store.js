import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        contactos: []
    },
    actions : {
        getUsuarios({commit}, listaContactos) {
            commit('getUsuarios',listaContactos)
        },
        deleteUsuario({commit}, id) {
            commit('deleteUsuario',id)
        }
    },
    mutations : {
        getUsuarios(state, listaContactosMutacion) {
            state.contactos=listaContactosMutacion
        },
        deleteUsuario(state, id) {
            let offset = state.contactos.findIndex(usuario => usuario.id == id)
            //delete usuarios[offset]
            state.contactos.splice(offset, 1)
        }
    }
})

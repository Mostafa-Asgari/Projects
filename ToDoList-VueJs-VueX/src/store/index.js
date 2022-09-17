import { createStore, storeKey } from 'vuex'

export default createStore({
  state: {
    todos: [
      {title: 'Javascript', completed: false}
    ]
  },
  getters: {
  },
  mutations: {
    ADD_TODO(state, newtodo){
      state.todos.push({
        title: newtodo,
        completed: false
      })
    },
    DELETE_TODO(state, newtodo){
      let index = state.todos.indexOf(newtodo)
      state.todos.splice(index, 1)
    },
    TOGGLE_TODO(state, newtodo){
      newtodo.completed = !newtodo.completed
    }
  },
  actions: {
    add_todo({commit}, newtodo){
      commit('ADD_TODO', newtodo)
    },
    delete_todo({commit}, newtodo){
      commit('DELETE_TODO', newtodo)
    },
    toggle_todo({commit}, newtodo){
      commit('TOGGLE_TODO', newtodo)
    }
  },
  modules: {
  }
})

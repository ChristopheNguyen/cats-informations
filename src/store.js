import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const wikiAPI = (commit, response) => {
    let title = ''
    response.data.forEach( (data) => {
      title = data.wikipedia_url.substr(data.wikipedia_url.lastIndexOf('/') + 1)
      axios({
        method: 'get',
        url: 'https://en.wikipedia.org/api/rest_v1/page/media/' + title
      })
      .then(wikiResponse => {
        const catInfo = {
          ...data,
          original: wikiResponse.data.items[0].original,
          thumbnail: wikiResponse.data.items[0].thumbnail
        }
        commit('setCatToState', catInfo)
      })
      .catch(error => {
        console.error(error)
      })
    })
  }
  

export default new Vuex.Store({
  state: {
    cats: []
  },
  mutations: {
    initCatState(state, cat) {
      state.cats = []
    },
    setCatToState(state, cat) {
      state.cats.push(cat)
    }
  },
  actions: {
    searchAllCats({
      commit
    }){
      axios({
        method: 'get',
        headers: {'x-api-key': '059c6726-3daa-4aa9-b44e-4c746e414620'},
        url: 'https://api.thecatapi.com/v1/breeds'
      })
      .then(response => {
        wikiAPI(commit, response)
      })
      .catch(error => {
        console.log(error)
      })
    },
    searchCats({
      commit
    }, q){
      axios({
        method: 'get',
        headers: {'x-api-key': '059c6726-3daa-4aa9-b44e-4c746e414620'},
        url: 'https://api.thecatapi.com/v1/breeds/search?q=' + q
      })
      .then(response => {
        wikiAPI(commit, response)
      }).catch(error => {
        console.error(error)
      })
    }
  },
  getters: {
    getCats: state => {
      return state.cats
    }
  }
})

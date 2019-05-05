<template>
  <div class="home">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
      <b-navbar-brand href="#">Cats informations</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-form-select v-model="selected" :options="options"></b-form-select>

          <!-- <b-nav-item-dropdown text="Country Search" right v-model="selected">
            <b-dropdown-item :value="en" href="#">EN</b-dropdown-item>
            <b-dropdown-item :value="es" href="#">ES</b-dropdown-item>
            <b-dropdown-item :value="ru" href="#">RU</b-dropdown-item>
            <b-dropdown-item :value="fa" href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <ListCat :cats='cats'/>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCat from '@/components/ListCat.vue'

import Vuex, { mapGetters } from 'vuex';

export default {
  name: 'breeds',
  components: {
    ListCat
  },
  computed: {
    ...mapGetters({
      cats: 'getCats',
    }),
     selected: {
        get () {
          return null;
        },
        set (optionValue) {
          this.$store.dispatch('searchCats', [optionValue])
        },
      },
  },
  created() {
    this.$store.dispatch('searchAllCats')
  },
 data() {
      return {
        options: [
          { value: null, text: 'Filtre' },
          { value: 'us', text: 'United State' },
          { value: 'egypt', text: 'Egypt' },
          { value: 'greece', text: 'Greece' }
        ]
      }
 }
}
</script>

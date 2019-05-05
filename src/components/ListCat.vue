<template>
  <div class="cardList">
    <b-card-group deck>
      <div class="cats" v-for="(cat, index) in cats" :key="cat.id">
          <b-card
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
            <b-card-img :src='cat.original.source' alt="Image" height='300px' top></b-card-img>
              <b-card-text>
                <h1>{{cat.name}}</h1>
                {{cat.origin}}
              </b-card-text>

              <b-button href="#" variant="primary" v-b-modal="'my-modal' + index">More information</b-button>
              <b-modal
               :id="'my-modal' + index"
               size="lg"
               :hide-footer="true"
               :hide-header="true">
                <b-row align-v="center">
                  <b-col>
                    <b-img :src='cat.original.source' fluid-grow alt="Responsive image"></b-img>
                  </b-col>
                  <b-col >
                    <h1>{{cat.name}}</h1>
                    <p>{{cat.description}}</p>
                  </b-col>
                 </b-row>
                </b-modal>
            </b-card>
      </div>
     </b-card-group>

  </div>
</template>

<script>
export default {
  name: 'ListCat',
  props: {
    msg: String,
    cats: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardList {
 padding-top: 20px
}
</style>

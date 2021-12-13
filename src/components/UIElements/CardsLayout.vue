<template>
  <div>
    <v-card class="mx-auto pa-8" max-width="374">
    <v-img class="mx-auto"
      height="250"
      :src="getImgUrl(imageCard)"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <div>
        Small plates, salads and sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>
  </v-card>
  </div>
</template>
<script>
export default {
  props:{
    imageCard:String
  },
 methods:{
      getImgUrl(pic) {
    return require('../../assets/'+pic)
}
}
}
</script>
<style scoped>

</style>
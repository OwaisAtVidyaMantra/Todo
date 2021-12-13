<template>
  <v-card class="mx-auto " max-width="374">
    <img
      height="250"
      :src="getImgUrl(imageCard)"
    >

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>
  </v-card>
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

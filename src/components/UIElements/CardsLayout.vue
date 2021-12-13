<template>
<<<<<<< HEAD
  <v-card class="mx-auto" max-width="374">
    <img height="300" :src="imageSrc" />
    <p> </p>
=======
  <div>
    <v-card class="mx-auto pa-8" max-width="374">
    <v-img class="mx-auto"
      height="250"
      :src="getImgUrl(imageCard)"
    ></v-img>
>>>>>>> f387bad8c70192e4424d8ea833cffe4c9249506d

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
<<<<<<< HEAD
  props: ["imageSrc"],
};
=======
  props:{
    imageCard:String
  },
 methods:{
      getImgUrl(pic) {
    return require('../../assets/'+pic)
}
}
}
>>>>>>> f387bad8c70192e4424d8ea833cffe4c9249506d
</script>
<style scoped>

</style>
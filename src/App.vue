<template>
  <v-app>
    <app-header></app-header>

    <v-main> 
      <app-banner></app-banner>
    </v-main>
  </v-app>
</template>

<script>
 import Header from "./components/UIElements/Header.vue";
  import Banner from "./components/UIElements/Banner.vue";
export default {
  name: "App",
  components: {
    'app-header':Header,
    'app-banner':Banner
  },

  data: () => ({
    //
  }),
};
</script>

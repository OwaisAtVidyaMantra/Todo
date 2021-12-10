<template>
  <v-app>
    <app-header></app-header>

    <v-main>
      <app-banner></app-banner>
      <main-content></main-content>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/UIElements/Header.vue";
import Banner from "./components/UIElements/Banner.vue";
import MainContent from './components/UIElements/MainContent.vue';
export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-banner": Banner,
    "main-content":MainContent
  },

  
};
</script>

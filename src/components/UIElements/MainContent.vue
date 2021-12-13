<template>
<<<<<<< HEAD
  <div>
    <v-container class="section1">
      <v-row no-gutters class="pa-20" style="height: 980px">
        <v-col lg="4" align-self="center">
          <h1>Why Exam Path Finder?</h1>
          {{ cardImg }}
          
          <img height="300" :src="cardImg" alt="img" />

          <br />
          <cards-layout></cards-layout>
        </v-col>
        <v-col lg="4" align-self="end">
          <cards-layout :imageSrc="cardImg"></cards-layout><br />
          <cards-layout imageSrc="b1"></cards-layout>
        </v-col>
        <v-col lg="4" align-self="start">
          <cards-layout
            imageSrc="https://exampathfinder.com/img/connect_with_community2.f1a32736.png"
          ></cards-layout>
          <br />
          <cards-layout
            imageSrc="https://exampathfinder.com/img/notification_feature.b0a9c247.png"
          ></cards-layout>
=======
  <div class="section1"> 
    <v-container style="height: 100%">
      <v-row no-gutters class="pa-20" >
        <v-col lg="4" align-self="center">
          <h1>Why Exam Path Finder?</h1>
          <br />
          <cards-layout imageCard="b1.png"></cards-layout>
        </v-col>
        <v-col lg="4" align-self="end">
          <cards-layout imageCard="b2.png"></cards-layout><br />
          <cards-layout imageCard="b3.png"></cards-layout>
        </v-col>
        <v-col lg="4" align-self="start">
          <cards-layout imageCard="b4.png"></cards-layout> <br />
          <cards-layout imageCard="b5.png"></cards-layout>
>>>>>>> f387bad8c70192e4424d8ea833cffe4c9249506d
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container class="pa-15" fluid style="background:#f7f7f7">
      <faq class="mx-15"></faq>
    </v-container>
    
  </div>

</template>
<script>
import CardsLayout from "./CardsLayout.vue";
<<<<<<< HEAD
const x = require('../../assets/b1.png')
export default {
  components: { "cards-layout": CardsLayout },
  data() {
    return {
      cardImg: x,
    };
  },
  computed: {
    //   img() {
    //     //   return "../src/assets/b1.png";
    //   }
  }
=======
import Faq from './Faq.vue';
export default {
  components: { CardsLayout, Faq },
>>>>>>> f387bad8c70192e4424d8ea833cffe4c9249506d
};
</script>
<style scoped>
.section1 {
  background-image: url("../../assets/bg1.png");
  background-size: cover;
  background-position: center ;
}
</style>

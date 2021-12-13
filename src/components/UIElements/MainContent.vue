<template>
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CardsLayout from "./CardsLayout.vue";
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
};
</script>

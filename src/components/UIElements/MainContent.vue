<template>
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
import Faq from './Faq.vue';
export default {
  components: { CardsLayout, Faq },
};
</script>
<style scoped>
.section1 {
  background-image: url("../../assets/bg1.png");
  background-size: cover;
  background-position: center ;
}
</style>

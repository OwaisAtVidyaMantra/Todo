<template>
  <div>
    <v-container class="section1">
      <v-row no-gutters class="pa-20" style="height:980px">
        <v-col lg="4" align-self="center">
          <h1>Why Exam Path Finder?</h1><br>
          <cards-layout  imageCard="b1.png"></cards-layout>
        </v-col>
        <v-col lg="4" align-self="end">
          <cards-layout imageCard="b2.png"></cards-layout><br>
          <cards-layout imageCard="b3.png"></cards-layout>
        </v-col>
        <v-col lg="4" align-self="start">
          <cards-layout imageCard="b4.png"></cards-layout> <br>
          <cards-layout imageCard="b5.png"></cards-layout>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CardsLayout from "./CardsLayout.vue";
export default {
  components: { CardsLayout },
};
</script>

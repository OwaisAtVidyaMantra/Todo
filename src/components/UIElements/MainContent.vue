<template>
  <div>
    <v-container class="section1">
      <v-row no-gutters class="pa-20" style="height:980px">
        <v-col lg="4" align-self="center">
          <h1>Why Exam Path Finder?</h1><br>
          <cards-layout></cards-layout>
        </v-col>
        <v-col lg="4" align-self="end">
          <cards-layout></cards-layout><br>
          <cards-layout></cards-layout>
        </v-col>
        <v-col lg="4" align-self="start">
          <cards-layout></cards-layout> <br>
          <cards-layout></cards-layout>
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

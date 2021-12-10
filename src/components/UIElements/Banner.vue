<template>
  <v-container>
    <v-row class="pt-10">
      <v-col cols="6" class="banner-text">
        <h1 class="mb-16">Compete with everyone and assess yourself</h1>
        <p>Measure your progress and better prepare for your goals</p>
        <v-layout align-content-space-around tag="div" wrap> </v-layout>
        <v-col  >
          <v-btn color="info" class="mr-5 mb-5"  outlined>SSC</v-btn>
          <v-btn color="info" class="mr-5 mb-5"  outlined>RAILWAYS</v-btn> <br>
          <v-btn color="info" class="mr-5 mb-5"  outlined>BANKING</v-btn>
          <v-btn color="info" class="mr-5 mb-5"  outlined>CIVIL SERVICES</v-btn>
        </v-col>
      </v-col>
      <v-col cols="6">
        <v-img contain src="../../assets/banner.png"> </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
.banner-text h1 {
  font-size: 75px;
  line-height: 82px;
  font-weight: 400;
  margin-bottom: 16px;
}
.banner-text p {
  font-size: 25px;
  font-family: Roboto;
  color: #383838;
  margin-bottom: 16px;
}
</style>

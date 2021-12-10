<template>
    <v-app-bar app elevation="0" color="#fff">
      <v-row class="mx-16" no-gutters="false">
        <v-col cols="3">
          <v-app-bar-nav-icon>
            <v-img max-width="120px" src="../../assets/epf_logo.png"></v-img>
          </v-app-bar-nav-icon>
        </v-col>
        <v-col cols="9" class="d-flex justify-end">
          <v-tabs style="max-width: fit-content !important;" class="mr-10" hide-slider>
            <v-tab>Home</v-tab>
            <v-tab>About Us</v-tab>
          </v-tabs>
         
          <v-btn class="ma-2" outlined color="indigo"> Register </v-btn>
          <v-btn class="ma-2" style="color:#fff" color="#1820c2"> Login </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
</template>
<script>


export default ({
  
})
</script>

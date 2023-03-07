<script>
import AppHeader from './components/AppHeader.vue';
import AppHome from './components/AppHome.vue';


export default {

  components: {

    AppHome,
    AppHeader

  }

}

</script>


<template>
  <AppHeader></AppHeader>
  <AppHome></AppHome>
</template>


<style lang="scss">
@use "./style/general.scss" as *;


body{

  background-color: black !important;

}
</style>

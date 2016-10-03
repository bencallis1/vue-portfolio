<template>
  <div id="app">
    <NavBar></NavBar>

    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from './components/NavBar/Nav.vue';


export default {
  components: {
    NavBar,
  },
};
</script>



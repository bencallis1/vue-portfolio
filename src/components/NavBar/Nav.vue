<template>
    <div class="main-nav-wrapper">
        <div>this is template body</div>
      <button v-on:click="show = !show">
       open
      </button>
      <transition name="bounce">
        <aside class="side-menu"  v-if="show">

        </aside>
    </transition>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        show: true,
      };
    },
  };
</script>


<style scoped>
  .main-nav-wrapper {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:75px;
    background: #ccc;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }

  @keyframes bounce-in {
    0% {
      transform: translateX(200%);
    }

    100% {
      transform: translateX(0%);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: translateX(20%);
    }

    100% {
      transform: translateX(200%);
    }
  }

  .side-menu {
    position: absolute;
    height:calc(100vh - 75px);
    margin-top: 35px;
    width:50%;
    background: gray;
  }
</style>



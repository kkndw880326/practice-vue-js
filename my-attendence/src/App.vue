<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/templates/Header.vue';
  import TodayTimeline from './components/templates/contents/TodayTimeline.vue';

  export default {
    name: "Home",
    components: {
      'my-header': Header,
      'my-content': TodayTimeline,
      'my-footer': ''
    }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>
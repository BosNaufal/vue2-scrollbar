
<template>
  <div>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar" :onMaxScroll="handleMaxScroll">
      <div class="scroll-me">
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="kolom"></div>
        <div class="clearfix"></div>
      </div>
    </vue-scrollbar>
  </div>
</template>

<script>

  import VueScrollbar from './vue-scrollbar.vue';
  require("../../../dist/style/vue2-scrollbar.css")
  require("../../../dist/style/app.css")

  export default {
    components: { VueScrollbar },
  };

</script>

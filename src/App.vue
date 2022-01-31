<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
//import HelloWorld from './components/HelloWorld.vue'
import navbar from "../src/components/navbar.vue";
import hero from "../src/components/hero.vue";
import foooter from "../src/components/footer.vue";
import converter from "../src/components/converter.vue";

export default {
  components: {
    navbar,
    hero,
    foooter,
    converter,
  },
};
</script>

<template>
  <navbar />
  <hero class="relative z-0" />
  <converter class="relative z-20 -mt-20" />
  <foooter />
</template>

<style></style>

<template>
  <v-app id="inspire">
    <navigation-bar></navigation-bar>

    <NuxtPage></NuxtPage>

    <application-footer></application-footer>
  </v-app>
</template>

<script setup>

</script>

<script>
import ApplicationFooter from '~/components/applicationFooter.vue';

export default {
  name: 'app',
  components: { ApplicationFooter }
}
</script>

<style scoped>

</style>
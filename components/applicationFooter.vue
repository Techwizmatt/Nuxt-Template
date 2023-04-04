<template>
  <v-sheet class="application-footer" color="primary">
    <div>
      This is the footer
    </div>
    <v-divider thickness="4" color="background"></v-divider>
    <div class="show-cursor" @click="goToUnixity">
      <div class="d-flex align-content-center justify-center">
        <div class="text-center">
          <span class="text-caption">Created with</span>
          <div class="d-flex align-content-space-between">
            <heart-button-effect class="mx-2"></heart-button-effect>
            <unixity-logo-text width="80px"></unixity-logo-text>
          </div>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'application-footer',
  methods: {
    goToUnixity() {
      window.open('https://unixity.co', '_blank')
    }
  }
}
</script>

<style scoped>
  .application-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
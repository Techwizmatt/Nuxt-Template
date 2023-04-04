<template>
  <div>
    <video-background :src="videoSrc" style="height: calc(100vh);">
      <v-overlay :absolute="true" :opacity="0.5" z-index="4" class="insetShadow">
        <slot></slot>
      </v-overlay>
    </video-background>
  </div>
</template>

<script>
export default {
  name: 'videoOverlay',
  props: {
    videoSrc: {
      type: String,
      default: () => 'https://artsandculture.withgoogle.com/gcs/national-parks-service/en-us/9f885369-a52a-4a0b-8b2f-f3e5e41cdd54.mp4'
    }
  }
}
</script>

<style scoped>
.insetShadow {
  -webkit-box-shadow: inset 0px -50px 100px -20px rgba(0,0,0,1);
  -moz-box-shadow: inset 0px -50px 100px -20px rgba(0,0,0,1);
  box-shadow: inset 0px -50px 100px -20px rgba(0,0,0,1);
}
</style>

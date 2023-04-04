<template>
  <svg viewBox="30 25 96 44" :width="width" :height="height">
    <path id="logoInfinityPath" class="themeColor" d="M 81 44 L 79 41 C 78 39 78 39 78 38 C 78 37 78 33 83 33 C 87 33 88 37 88 38 C 88 39 88 39 87 41 L 79 52 C 78 54 78 54 78 55 C 78 56 79 59 83 59 C 87 59 88 56 88 55 C 88 54 88 54 87 52 L 85 49" stroke-width="4" fill="none"></path>
    <path id="logoXPathA" class="logoXPath themeColor" d="M 81 44 L 79 41 C 78 39 78 39 78 38" stroke-width="4" fill="none" :stroke="color"></path>
    <path id="logoXPathB" class="logoXPath themeColor" d="M 88 38 C 88 39 88 39 87 41 L 79 52 C 78 54 78 54 78 55" stroke-width="4" fill="none" :stroke="color"></path>
    <path id="logoXPathC" class="logoXPath themeColor" d="M 88 55 C 88 54 88 54 87 52 L 85 49" stroke-width="4" fill="none" :stroke="color"></path>
    <text id="logoText" x="28" y="55" font-size="2em" :fill="color" class="themeColorFill">Uni</text>
    <text id="logoText" x="90" y="55" font-size="2em" :fill="color" class="themeColorFill">ity</text>
    <path id="logoXPathComplete" class="logoXPath themeColor" d="M 81 44 L 79 41 C 78 39 78 39 78 38 M 88 38 C 88 39 88 39 87 41 L 79 52 C 78 54 78 54 78 55 M 88 55 C 88 54 88 54 87 52 L 85 49" stroke-width="4" fill="none" :stroke="color"></path>
  </svg>
</template>

<script>
export default {
  name: 'unixityLogoText',
  props: {
    width: String,
    height: String,
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">

#logoInfinityPath {
  filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
  stroke-dasharray: 64;
  stroke-dashoffset: 192;
  opacity: 1;
  animation: logoInfinityPathFillAndEmpty 1.4s linear forwards;
}

#logoXPathA {
  stroke-dasharray: 7;
  stroke-dashoffset: 7;
  animation: logoXPathDrawOverlap 70ms linear forwards;
  animation-delay: 0.7s;
}

#logoXPathB {
  stroke-dasharray: 21;
  stroke-dashoffset: 21;
  animation: logoXPathDrawOverlap 200ms linear forwards;
  animation-delay: 0.95s;
}

#logoXPathC {
  stroke-dasharray: 7;
  stroke-dashoffset: 7;
  animation: logoXPathDrawOverlap 85ms linear forwards;
  animation-delay: 1.318s;
}

#logoXPathComplete {
  opacity: 0;
  animation: logoOpacityFill 0ms linear forwards;
  animation-delay: 1.4s;
  transform-origin: 83px 47px;
}

.themeColor {
  stroke: rgb(var(--v-theme-logo)) !important;
}

.themeColorFill {
  fill: rgb(var(--v-theme-logo)) !important;
}

#logoText {
  font-weight: bolder;
  opacity: 0;
  animation: logoOpacityFill 0.7s linear forwards;
}

@keyframes logoBoxPathFill {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes logoInfinityPathFillAndEmpty {
  to {
    stroke-dashoffset: 64;
  }
}

@keyframes logoXPathDrawOverlap {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes logoOpacityFill {
  to {
    opacity: 1;
  }
}

@keyframes logoOpacityEmpty {
  to {
    opacity: 0;
  }
}
</style>

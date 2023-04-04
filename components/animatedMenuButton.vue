<template>
  <div class="pa-2 show-cursor" @click="doClick">
    <div class="hamburger" :class="isOpen ? 'hamburger--is-open' : ''">
      <div class="hamburger__item hamburger__item--first"></div>
      <div class="hamburger__item hamburger__item--middle"></div>
      <div class="hamburger__item hamburger__item--last"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animatedMenuButton',
  props: {
    isOpen: {
      value: Boolean,
      default: false
    }
  },
  methods: {
    doClick () {
      this.$emit('doClick')
    }
  }
}
</script>

<style scoped lang="scss">
.hamburger {
  height: 20px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

&:hover {
   cursor: pointer;
 }

&__item {
   height: 2px;
   width: 100%;
   background: rgb(var(--v-theme-on-background));
   transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
   opacity 300ms linear;

    &--first {
      .hamburger--is-open & {
        transform: translate(0, 9px) rotate(45deg);
      }
    }

    &--middle {
      .hamburger--is-open & {
        opacity: 0;
      }
    }

    &--last {
      .hamburger--is-open & {
        transform: translate(0, -9px) rotate(-45deg);
      }
    }
  }
}

</style>
<script setup lang="ts">
import BootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { PropType } from "vue";

enum IconSizes {
  "sm",
  "md",
  "lg",
  "2x",
  "3x",
  "4x",
  "5x",
}

defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<keyof typeof IconSizes>,
    default: IconSizes.md,
  },
});
</script>

<template>
  <svg class="icon" :class="`icon-size-${size}`">
    <g transform-origin="center">
      <use v-bind:xlink:href="`${BootstrapIcons}#${icon}`" />
    </g>
  </svg>
</template>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
.icon-size {
  &-sm {
    font-size: 0.75rem;
  }
  &-md {
    font-size: 1rem;
  }
  &-lg {
    font-size: 1.5rem;
  }
  &-2x {
    font-size: 2rem;
  }
  &-3x {
    font-size: 3rem;
  }
  &-4x {
    font-size: 4rem;
  }
  &-5x {
    font-size: 5rem;
  }
}
</style>

<script setup>
defineProps({
  isInverted: Boolean,
});
</script>

<template>
  <button
    class="uppercase text-xs font-bold px-11 py-3 hover:bg-gray hover:text-black transition-colors duration-300"
    :class="isInverted ? 'bg-white text-black' : 'bg-black text-white'"
  >
    <slot></slot>
  </button>
</template>

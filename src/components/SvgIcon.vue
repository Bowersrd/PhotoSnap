<script setup>
import { defineAsyncComponent, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  isDark: {
    type: Boolean,
  },
});

const dynamicComponent = computed(() => {
  return defineAsyncComponent(() => import(`./icons/${props.name}.vue`));
});
</script>

<template>
  <component :is="dynamicComponent" :is-dark="isDark" />
</template>

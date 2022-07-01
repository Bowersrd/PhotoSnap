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
  return defineAsyncComponent(() => import(`./icons/${props.name}Icon.vue`));
});
</script>

<template>
  <component :is="dynamicComponent" :is-dark="isDark" class="cursor-pointer" />
</template>

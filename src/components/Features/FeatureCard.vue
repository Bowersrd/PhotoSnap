<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  body: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="grid place-items-center">
    <slot></slot>
    <h3 class="mt-12 mb-4 text-md font-bold">{{ title }}</h3>
    <p class="max-w-[45ch] opacity-60 xl:max-w-[35ch]">{{ body }}</p>
  </div>
</template>

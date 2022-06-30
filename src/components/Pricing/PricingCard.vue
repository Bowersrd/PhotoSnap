<script setup>
import SolidButton from "../Buttons/SolidButton.vue";

defineProps({
  title: {
    type: String,
    default: "Card Title",
  },
  body: {
    type: String,
    default: "Card Body",
  },
  price: {
    type: String,
    default: "0.00",
  },
  isDark: {
    type: Boolean,
  },
  isFeatured: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="relative w-full pt-14 pb-10 px-8 text-center"
    :class="isDark ? 'bg-black text-white' : 'bg-gray'"
  >
    <h2 class="text-lg font-bold mb-4">{{ title }}</h2>
    <p class="opacity-60 mb-10">{{ body }}</p>
    <p class="text-2xl font-bold">${{ price }}</p>
    <p class="opacity-60 mb-10">per month</p>
    <SolidButton class="w-full" :is-inverted="isDark">Pick Plan</SolidButton>
    <div
      v-if="isFeatured"
      class="absolute top-0 left-0 h-[.375rem] w-full gradient-accent"
    ></div>
  </div>
</template>

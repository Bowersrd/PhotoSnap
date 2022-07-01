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
    class="relative w-full pt-14 pb-10 px-8 text-center md:grid md:grid-cols-2 md:text-left md:py-10 xl:block xl:text-center xl:px-10 xl:h-min"
    :class="[
      isDark ? 'bg-black text-white' : 'bg-gray',
      isFeatured ? 'xl:pt-20 xl:pb-16' : 'xl:pt-14',
    ]"
  >
    <h2 class="text-lg font-bold mb-4">{{ title }}</h2>
    <p
      class="opacity-60 mb-10 md:col-start-1 md:mb-8 md:max-w-[27ch] xl:mx-auto"
    >
      {{ body }}
    </p>
    <p
      class="text-2xl font-bold md:justify-self-end md:row-start-1 md:col-start-2"
    >
      ${{ price }}
    </p>
    <p class="opacity-60 mb-10 md:col-start-2 md:justify-self-end">per month</p>
    <SolidButton
      class="w-full md:col-start-1 md:row-start-3 md:max-w-xs"
      :is-inverted="isDark"
      >Pick Plan</SolidButton
    >
    <div
      v-if="isFeatured"
      class="absolute top-0 left-0 h-[.375rem] w-full gradient-accent md:h-full md:w-[6px] xl:w-full xl:h-[.375rem]"
    ></div>
  </div>
</template>

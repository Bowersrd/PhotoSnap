<script setup>
import ArrowButton from "../Buttons/ArrowButton.vue";

const props = defineProps({
  featuredStory: {
    type: Object,
    default() {
      return {};
    },
  },
});

const mobileImage = new URL(
  `../../assets/images/stories/mobile/${props.featuredStory.image}`,
  import.meta.url
).href;
const tabletImage = new URL(
  `../../assets/images/stories/tablet/${props.featuredStory.image}`,
  import.meta.url
).href;
const desktopImage = new URL(
  `../../assets/images/stories/desktop/${props.featuredStory.image}`,
  import.meta.url
).href;
</script>

<template>
  <header class="bg-black text-white md:grid md:items-center">
    <div class="w-full md:row-start-1 md:col-start-1">
      <picture>
        <source media="(min-width:1280px)" :srcset="desktopImage" />
        <source media="(min-width:768px)" :srcset="tabletImage" />
        <img :src="mobileImage" alt="Flowers" class="w-full" />
      </picture>
    </div>
    <div
      class="relative py-[4.5rem] px-8 md:row-start-1 md:col-start-1 md:px-10 md:py-0 xl:pl-28"
    >
      <p class="text-white text-xs uppercase mb-4 md:mb-6">
        Last month's featured story
      </p>
      <h1 class="text-xl font-bold uppercase mb-4 md:text-2xl md:max-w-sm">
        {{ featuredStory.title }}
      </h1>
      <p class="text-sm mb-6">
        <span class="opacity-75">{{ featuredStory.published }}</span> by
        {{ featuredStory.author }}
      </p>
      <p class="opacity-60 mb-6 md:mb-12 md:max-w-[38ch]">
        {{ featuredStory.body }}
      </p>
      <ArrowButton is-inverted>{{ featuredStory.buttonTitle }}</ArrowButton>
    </div>
  </header>
</template>

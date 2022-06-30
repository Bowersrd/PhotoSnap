<script setup>
import ArrowButton from "@/components/Buttons/ArrowButton.vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    default: "",
  },
  published: {
    type: String,
    default: "",
  },
  image: {
    type: Object,
    default() {
      return {};
    },
  },
  isFeatured: {
    type: Boolean,
  },
});

const mobileImage = new URL(
  `../../assets/images/stories/mobile/${props.image.name}`,
  import.meta.url
).href;
const tabletUpImage = new URL(
  `../../assets/images/stories/desktop/${props.image.name}`,
  import.meta.url
).href;
</script>

<template>
  <div class="relative w-full">
    <div
      class="w-full overflow-hidden after:w-full after:h-full after:gradient-black after:absolute after:inset-0 md:max-h-[500px]"
    >
      <picture>
        <source media="(min-width:768px)" :srcset="tabletUpImage" />
        <img
          :src="mobileImage"
          alt="Flowers"
          class="w-full md:relative md:bottom-5"
        />
      </picture>
    </div>
    <div class="w-full absolute bottom-10 z-10 text-white px-8">
      <p v-if="published && !isFeatured" class="text-sm">{{ published }}</p>
      <h2 class="text-md font-bold">{{ title }}</h2>
      <p class="text-sm">by {{ author }}</p>
      <div class="w-full h-[1px] bg-white mt-4 mb-5 opacity-25"></div>
      <ArrowButton is-inverted is-full-width>Read Story</ArrowButton>
    </div>
  </div>
</template>

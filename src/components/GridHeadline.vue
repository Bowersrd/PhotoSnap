<script setup>
import { useRoute } from "vue-router";
import ArrowButton from "@/components/Buttons/ArrowButton.vue";

const route = useRoute();

const props = defineProps({
  image: {
    type: String,
    default: "beautiful-stories.jpg",
  },
  title: {
    type: String,
    default: "",
  },
  body: {
    type: String,
    default: "",
  },
  buttonTitle: {
    type: String,
    default: "",
  },
  isDark: {
    type: Boolean,
  },
  elementTag: {
    type: String,
    default: "section",
  },
  hideButton: {
    type: Boolean,
  },
  hasGradientBar: {
    type: Boolean,
  },
  isFlipped: {
    type: Boolean,
  },
});

const assetFolder = route.name;

const mobileImage = new URL(
  `../assets/images/${assetFolder}/mobile/${props.image}`,
  import.meta.url
).href;
const tabletImage = new URL(
  `../assets/images/${assetFolder}/tablet/${props.image}`,
  import.meta.url
).href;
const desktopImage = new URL(
  `../assets/images/${assetFolder}/desktop/${props.image}`,
  import.meta.url
).href;
</script>

<template>
  <component
    :is="elementTag"
    class="grid md:grid-cols-3"
    :class="{ 'bg-black': isDark }"
  >
    <div
      class="w-full md:row-start-1"
      :class="isFlipped ? 'md:col-start-1' : 'md:col-start-3'"
    >
      <picture>
        <source media="(min-width:1024px)" :srcset="desktopImage" />
        <source media="(min-width:768px)" :srcset="tabletImage" />
        <img :src="mobileImage" alt="Flowers" class="w-full" />
      </picture>
    </div>
    <div
      class="relative py-[4.5rem] px-8 md:col-span-2 md:flex md:flex-col md:justify-center md:px-12"
      :class="isDark ? 'text-white' : 'text-black'"
    >
      <slot name="featured"></slot>
      <h1 class="text-xl font-bold uppercase mb-4 md:text-2xl md:mb-5">
        {{ title }}
      </h1>
      <slot name="author"></slot>
      <p class="opacity-60 mb-6 md:mb-12">{{ body }}</p>
      <ArrowButton v-if="!hideButton" :is-inverted="isDark">{{
        buttonTitle
      }}</ArrowButton>
      <div
        v-if="hasGradientBar"
        class="absolute top-0 h-[.375rem] w-1/3 gradient-accent"
      ></div>
    </div>
  </component>
</template>

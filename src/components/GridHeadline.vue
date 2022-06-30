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
});

const assetFolder = route.name;

const imgUrl = new URL(
  `../assets/images/${assetFolder}/mobile/${props.image}`,
  import.meta.url
).href;
</script>

<template>
  <component :is="elementTag" :class="{ 'bg-black': isDark }">
    <div class="w-full">
      <img class="w-full" :src="imgUrl" alt="" />
    </div>
    <div
      class="relative py-[4.5rem] px-8"
      :class="isDark ? 'text-white' : 'text-black'"
    >
      <slot name="featured"></slot>
      <h1 class="text-xl font-bold uppercase mb-4">{{ title }}</h1>
      <slot name="author"></slot>
      <p class="opacity-60 mb-6">{{ body }}</p>
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

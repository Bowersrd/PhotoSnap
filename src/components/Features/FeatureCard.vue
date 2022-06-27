<script setup>
const props = defineProps({
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

const imgUrl = new URL(
  `../../assets/images/features/desktop/${props.icon}`,
  import.meta.url
).href;
</script>

<template>
  <div class="grid place-items-center">
    <slot></slot>
    <h3 class="mt-12 mb-4 text-md font-bold">{{ title }}</h3>
    <p>{{ body }}</p>
  </div>
</template>

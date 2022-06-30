<script setup>
import { ref } from "vue";
import GridHeadline from "../components/GridHeadline.vue";
import StoryContainer from "../components/Stories/StoryContainer.vue";

const featuredStory = ref({
  title: "Hazy full moon of Appalachia",
  body: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
  buttonTitle: "Read the story",
  image: "moon-of-appalacia.jpg",
  author: "John Appleseed",
  published: "March 2nd 2020",
});
</script>

<template>
  <GridHeadline
    element-tag="header"
    :title="featuredStory.title"
    :body="featuredStory.body"
    :image="featuredStory.image"
    :button-title="featuredStory.buttonTitle"
    is-dark
  >
    <template #featured>
      <p class="text-white text-xs uppercase mb-4">
        Last month's featured story
      </p>
    </template>
    <template #author>
      <p class="text-sm mb-6">
        <span class="opacity-75">{{ featuredStory.published }}</span> by
        {{ featuredStory.author }}
      </p>
    </template>
  </GridHeadline>
  <main>
    <StoryContainer></StoryContainer>
  </main>
</template>

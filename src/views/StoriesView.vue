<script setup>
import { ref } from "vue";
import FeaturedStory from "../components/Stories/FeaturedStory.vue";
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
  <FeaturedStory :featured-story="featuredStory"></FeaturedStory>
  <main>
    <StoryContainer></StoryContainer>
  </main>
</template>

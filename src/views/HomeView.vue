<script setup>
import AppHeader from "@/components/AppHeader.vue";
import GridHeadline from "@/components/GridHeadline.vue";
import StoryContainer from "@/components/Stories/StoryContainer.vue";
import FeaturesContainer from "@/components/Features/FeaturesContainer.vue";
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <GridHeadline
      image="beautiful-stories.jpg"
      title="Beautiful stories every time"
      body="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      button-title="View the stories"
      is-flipped
    ></GridHeadline>
    <GridHeadline
      image="designed-for-everyone.jpg"
      title="Designed for everyone"
      body="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
      button-title="View the stories"
    ></GridHeadline>
    <StoryContainer is-featured></StoryContainer>
    <FeaturesContainer columns="xl:grid-cols-3" is-featured></FeaturesContainer>
  </main>
</template>

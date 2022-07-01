<script setup>
import GridHeadline from "../components/GridHeadline.vue";
import FeaturesContainer from "../components/Features/FeaturesContainer.vue";
import JoinBeta from "../components/JoinBeta.vue";
</script>

<template>
  <GridHeadline
    element-tag="header"
    image="hero.jpg"
    title="Features"
    body="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
    is-dark
    hide-button
    has-gradient-bar
  ></GridHeadline>
  <main>
    <FeaturesContainer columns="grid-cols-2"></FeaturesContainer>
    <JoinBeta></JoinBeta>
  </main>
</template>

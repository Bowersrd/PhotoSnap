<script setup>
import { ref } from "vue";
import SvgIcon from "./SvgIcon.vue";
import ArrowButton from "./Buttons/ArrowButton.vue";

const socialMedia = ref([
  "media/Facebook",
  "media/Youtube",
  "media/Twitter",
  "media/Pinterest",
  "media/Instagram",
]);
</script>

<template>
  <footer class="bg-black text-center grid py-14">
    <div class="mb-8 mx-auto">
      <SvgIcon name="Logo" is-dark></SvgIcon>
    </div>
    <div class="flex gap-3 justify-center mb-12">
      <SvgIcon
        v-for="media in socialMedia"
        :key="media"
        :name="media"
      ></SvgIcon>
    </div>
    <ul class="text-white text-xs uppercase grid gap-5 mb-28">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/stories">Stories</router-link>
      </li>
      <li>
        <router-link to="/features">Features</router-link>
      </li>
      <li>
        <router-link to="/pricing">Pricing</router-link>
      </li>
    </ul>
    <ArrowButton class="mb-8 mx-auto" is-inverted>Get an invite</ArrowButton>
    <p class="text-sm text-white opacity-50">
      Copyright 2019. All Rights Reserved
    </p>
  </footer>
</template>

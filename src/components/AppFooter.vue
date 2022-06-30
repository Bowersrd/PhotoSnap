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
  <footer
    class="bg-black text-center grid py-14 md:grid md:grid-cols-2 md:px-10 md:py-16"
  >
    <div class="mb-8 mx-auto md:mx-0">
      <SvgIcon name="Logo" is-dark></SvgIcon>
    </div>
    <div
      class="flex gap-3 justify-center mb-12 md:row-start-3 md:justify-start md:mb-0"
    >
      <SvgIcon
        v-for="media in socialMedia"
        :key="media"
        :name="media"
      ></SvgIcon>
    </div>
    <ul
      class="text-white text-xs uppercase grid gap-5 mb-28 md:flex md:gap-6 md:mb-[4.5rem]"
    >
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
    <ArrowButton
      class="mb-8 mx-auto md:mx-0 md:col-start-2 md:row-start-1 md:justify-self-end"
      is-inverted
      >Get an invite</ArrowButton
    >
    <p class="text-sm text-white opacity-50 md:text-right md:row-start-3">
      Copyright 2019. All Rights Reserved
    </p>
  </footer>
</template>

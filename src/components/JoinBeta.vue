<script setup>
import ArrowButton from "../components/Buttons/ArrowButton.vue";
</script>

<template>
  <section class="relative">
    <div
      class="w-full bg-[url('./assets/images/shared/mobile/bg-beta.jpg')] bg-cover py-16 px-6"
    >
      <div class="text-white">
        <h4 class="text-xl font-bold uppercase mb-6">
          We're in beta. Get your invite today!
        </h4>
        <ArrowButton is-inverted>Get an invite</ArrowButton>
      </div>
    </div>
    <div class="absolute top-0 left-7 h-[.375rem] w-1/3 gradient-accent"></div>
  </section>
</template>

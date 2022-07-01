<script setup>
import ArrowButton from "../components/Buttons/ArrowButton.vue";
</script>

<template>
  <section class="relative">
    <div
      class="w-full bg-[url('./assets/images/shared/mobile/bg-beta.jpg')] bg-cover py-16 px-6 md:bg-[url('./assets/images/shared/tablet/bg-beta.jpg')] md:px-10 md:py-16"
    >
      <div class="text-white md:grid md:grid-cols-3 md:items-center">
        <h4
          class="text-xl font-bold uppercase mb-6 md:text-2xl md:col-span-2 md:max-w-sm"
        >
          We're in beta. Get your invite today!
        </h4>
        <ArrowButton class="justify-self-end" is-inverted
          >Get an invite</ArrowButton
        >
      </div>
    </div>
    <div
      class="absolute top-0 left-7 h-[.375rem] w-1/3 gradient-accent md:left-0 md:h-full md:w-[6px]"
    ></div>
  </section>
</template>

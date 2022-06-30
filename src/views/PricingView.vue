<script setup>
import { ref } from "vue";
import GridHeadline from "../components/GridHeadline.vue";
import ToggleSwitch from "../components/Pricing/ToggleSwitch.vue";

const paymentChoice = ref("monthly");

const updatePaymentChoice = (toggled) => {
  if (toggled) {
    paymentChoice.value = "yearly";
  } else {
    paymentChoice.value = "monthly";
  }
};
</script>

<template>
  <GridHeadline
    element-tag="header"
    image="hero.jpg"
    title="Pricing"
    body="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
    is-dark
    hide-button
    has-gradient-bar
  ></GridHeadline>
  <main class="pt-16">
    <div class="mb-10 flex justify-center items-center">
      <p
        class="text-md mr-8"
        :class="{ 'font-bold': paymentChoice == 'monthly' }"
      >
        Monthly
      </p>
      <ToggleSwitch @update-toggle="updatePaymentChoice"></ToggleSwitch>
      <p
        class="text-md ml-8"
        :class="{ 'font-bold': paymentChoice == 'yearly' }"
      >
        Yearly
      </p>
    </div>
  </main>
</template>

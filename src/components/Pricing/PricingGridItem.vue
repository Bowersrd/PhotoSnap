<script setup>
import SvgIcon from "../SvgIcon.vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  includedPlans: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <div
    class="grid col-span-3 border-b border-gray pb-6 md:grid-cols-5 md:items-center"
  >
    <h5
      class="col-span-3 uppercase text-xs font-bold mb-4 md:col-span-2 md:mb-0 md:ml-6"
    >
      {{ title }}
    </h5>
    <div class="md:flex md:justify-center">
      <p class="text-xxs font-bold uppercase opacity-50 md:hidden">Basic</p>
      <SvgIcon
        v-show="includedPlans.includes('basic')"
        name="pricing/Check"
      ></SvgIcon>
    </div>
    <div class="md:flex md:justify-center">
      <p class="text-xxs font-bold uppercase opacity-50 md:hidden">Pro</p>
      <SvgIcon
        v-show="includedPlans.includes('pro')"
        name="pricing/Check"
      ></SvgIcon>
    </div>
    <div class="md:flex md:justify-center">
      <p class="text-xxs font-bold uppercase opacity-50 md:hidden">Business</p>
      <SvgIcon
        v-show="includedPlans.includes('business')"
        name="pricing/Check"
      ></SvgIcon>
    </div>
  </div>
</template>

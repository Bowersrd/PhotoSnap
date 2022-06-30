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
  <div class="grid col-span-3 border-b border-gray pb-6">
    <h5 class="col-span-3 uppercase text-xs font-bold mb-4">{{ title }}</h5>
    <div>
      <p class="text-xxs font-bold uppercase opacity-50">Basic</p>
      <SvgIcon
        v-show="includedPlans.includes('basic')"
        name="pricing/Check"
      ></SvgIcon>
    </div>
    <div>
      <p class="text-xxs font-bold uppercase opacity-50">Pro</p>
      <SvgIcon
        v-show="includedPlans.includes('pro')"
        name="pricing/Check"
      ></SvgIcon>
    </div>
    <div>
      <p class="text-xxs font-bold uppercase opacity-50">Business</p>
      <SvgIcon
        v-show="includedPlans.includes('business')"
        name="pricing/Check"
      ></SvgIcon>
    </div>
  </div>
</template>

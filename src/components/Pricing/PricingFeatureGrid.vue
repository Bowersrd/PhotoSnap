<script setup>
import PricingGridItem from "./PricingGridItem.vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  features: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <div class="grid grid-cols-3 max-w-3xl mx-auto">
    <div class="col-span-3 border-b border-black pb-5 md:grid md:grid-cols-5">
      <h4 class="uppercase text-xs font-bold md:col-span-2 md:ml-6">
        {{ title }}
      </h4>
      <h4 class="hidden uppercase text-xs font-bold text-center md:block">
        Basic
      </h4>
      <h4 class="hidden uppercase text-xs font-bold text-center md:block">
        Pro
      </h4>
      <h4 class="hidden uppercase text-xs font-bold text-center md:block">
        Business
      </h4>
    </div>
    <PricingGridItem
      v-for="feature in features"
      :key="feature.title"
      class="mt-6"
      :title="feature.title"
      :included-plans="feature.includedPlans"
    ></PricingGridItem>
  </div>
</template>

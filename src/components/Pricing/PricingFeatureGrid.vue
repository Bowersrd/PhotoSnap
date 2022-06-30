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
  <div class="grid grid-cols-3">
    <div class="col-span-3 border-b border-black pb-5">
      <h4 class="uppercase text-xs font-bold">{{ title }}</h4>
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

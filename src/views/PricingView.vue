<script setup>
import { ref } from "vue";
import GridHeadline from "../components/GridHeadline.vue";
import ToggleSwitch from "../components/Buttons/ToggleSwitch.vue";
import PricingCard from "../components/Pricing/PricingCard.vue";
import PricingFeatureGrid from "../components/Pricing/PricingFeatureGrid.vue";
import JoinBeta from "../components/JoinBeta.vue";

const paymentChoice = ref("monthly");

const updatePaymentChoice = (toggled) => {
  if (toggled) {
    paymentChoice.value = "yearly";
  } else {
    paymentChoice.value = "monthly";
  }
};

const plans = [
  {
    title: "Basic",
    body: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: "19.00",
    isDark: false,
    isFeatured: false,
  },
  {
    title: "Pro",
    body: "More advanced features available. Recommended for photography veterans and professionals.",
    price: "39.00",
    isDark: true,
    isFeatured: true,
  },
  {
    title: "Business",
    body: "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: "99.00",
    isDark: false,
    isFeatured: false,
  },
];

const features = [
  {
    title: "Unlimited Story Posting",
    includedPlans: ["basic", "pro", "business"],
  },
  {
    title: "Unlimited Photo Upload",
    includedPlans: ["basic", "pro", "business"],
  },
  {
    title: "Embedding Custom Content",
    includedPlans: ["pro", "business"],
  },
  {
    title: "Customize Metadata",
    includedPlans: ["pro", "business"],
  },
  {
    title: "Advanced Metrics",
    includedPlans: ["business"],
  },
  {
    title: "Photo Downloads",
    includedPlans: ["business"],
  },
  {
    title: "Search Engine Indexing",
    includedPlans: ["business"],
  },
  {
    title: "Custom Analytics",
    includedPlans: ["business"],
  },
];
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
  <main class="pt-16 px-7">
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
    <div class="grid gap-6 mb-16">
      <PricingCard
        v-for="plan in plans"
        :key="plan.title"
        :title="plan.title"
        :body="plan.body"
        :price="plan.price"
        :is-dark="plan.isDark"
        :is-featured="plan.isFeatured"
      ></PricingCard>
    </div>
    <PricingFeatureGrid
      class="mb-16"
      title="The Features"
      :features="features"
    ></PricingFeatureGrid>
  </main>
  <JoinBeta></JoinBeta>
</template>

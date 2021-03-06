<script setup>
import { ref } from "vue";
import FeatureCard from "./FeatureCard.vue";
import SvgIcon from "../SvgIcon.vue";

const props = defineProps({
  columns: {
    type: String,
    default: "grid-cols-1",
  },
  isFeatured: {
    type: Boolean,
  },
});

const features = ref([
  {
    title: "100% Responsive",
    body: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    icon: "features/Responsive",
  },
  {
    title: "No Photo Upload Limit",
    body: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    icon: "features/NoLimit",
  },
  {
    title: "Available to Embed",
    body: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    icon: "features/Embed",
  },
  {
    title: "Custom Domain",
    body: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    icon: "features/CustomDomain",
  },
  {
    title: "Boost Your Exposure",
    body: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    icon: "features/BoostExposure",
  },
  {
    title: "Drag & Drop Image",
    body: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    icon: "features/DragDrop",
  },
]);

const visibleFeatures = props.isFeatured
  ? features.value.slice(0, 3)
  : features;
</script>

<template>
  <section
    class="grid px-8 py-20 text-center gap-14 max-w-6xl mx-auto md:px-10 md:gap-x-3 md:gap-y-[4.5rem] xl:py-28 xl:gap-x-7 xl:gap-y-28 xl:px-0"
    :class="`${columns}`"
  >
    <FeatureCard
      v-for="feature in visibleFeatures"
      :key="feature.title"
      :title="feature.title"
      :body="feature.body"
      :icon="feature.icon"
    >
      <SvgIcon :name="feature.icon"></SvgIcon>
    </FeatureCard>
  </section>
</template>

<script setup>
import { ref } from "vue";
import StoryCard from "@/components/Stories/StoryCard.vue";

const props = defineProps({
  isFeatured: {
    type: Boolean,
  },
});

const stories = ref([
  {
    title: "The Mountains",
    author: "John Appleseed",
    published: "April 16th 2020",
    image: {
      name: "mountains.jpg",
      alt: "View of a large mountain with clouds covering the bottom",
    },
  },
  {
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    published: "April 14th 2020",
    image: {
      name: "cityscapes.jpg",
      alt: "Ariel view of a city landscape",
    },
  },
  {
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    published: "April 11th 2020",
    image: {
      name: "18-days-voyage.jpg",
      alt: "Silhouette of a man walking on land across a sunset",
    },
  },
  {
    title: "Architecturals",
    author: "Samantha Brooke",
    published: "April 9th 2020",
    image: {
      name: "architecturals.jpg",
      alt: "View of an abstract building at an angle",
    },
  },

  {
    title: "World Tour 2019",
    author: "Timothy Wagner",
    published: "April 7th 2020",
    image: {
      name: "world-tour.jpg",
      alt: "Scenery view of a lake at the bottom of a mountain",
    },
  },
  {
    title: "Unforeseen Corners",
    author: "William Malcolm",
    published: "April 3rd 2020",
    image: {
      name: "unforeseen-corners.jpg",
      alt: "Sunset view coming up in the middle of a tree on a hill by the water",
    },
  },
  {
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    published: "March 29th 2020",
    image: {
      name: "king-on-africa.jpg",
      alt: "Close image of a Lion's face",
    },
  },
  {
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    published: "March 21st 2020",
    image: {
      name: "trip-to-nowhere.jpg",
      alt: "A tree sitting on a hill beind a body of water",
    },
  },

  {
    title: "Rage of the Sea",
    author: "Mohammed Abdul",
    published: "March 19th 2020",
    image: {
      name: "rage-of-the-sea.jpg",
      alt: "Image from inside the ocean with waves coming toward the view",
    },
  },
  {
    title: "Running Free",
    author: "Michelle",
    published: "March 16th 2020",
    image: {
      name: "running-free.jpg",
      alt: "Horses running in a foggy wooded area",
    },
  },
  {
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    published: "March 11th 2020",
    image: {
      name: "behind-the-waves.jpg",
      alt: "Close view of a wave crashing in the ocean",
    },
  },
  {
    title: "Calm Waters",
    author: "Samantha Brooke",
    published: "March 9th 2020",
    image: {
      name: "calm-waters.jpg",
      alt: "Sceneic view of mountains with a red and purple hue",
    },
  },

  {
    title: "The Milky Way",
    author: "Benjamin Cruz",
    published: "March 5th 2020",
    image: {
      name: "milky-way.jpg",
      alt: "View looking up at the stars and milky way",
    },
  },
  {
    title: "Night at the Dark Forest",
    author: "Mohammed Abdul",
    published: "March 4th 2020",
    image: {
      name: "dark-forest.jpg",
      alt: "Snowy landscape with rocky mountains and trees",
    },
  },
  {
    title: "Somwarpet's Beauty",
    author: "Michelle",
    published: "March 1st 2020",
    image: {
      name: "somwarpet.jpg",
      alt: "Close view of yellow flowers",
    },
  },
  {
    title: "Land of Dreams",
    author: "William Malcolm",
    published: "February 25th 2020",
    image: {
      name: "land-of-dreams.jpg",
      alt: "Snowy landscape with a pointy roofed building sitting on a hill with mountains in the background",
    },
  },
]);

const visibleStories = props.isFeatured ? stories.value.slice(0, 4) : stories;
</script>

<template>
  <section class="grid md:grid-cols-2">
    <StoryCard
      v-for="story in visibleStories"
      :key="story.title"
      :title="story.title"
      :author="story.author"
      :image="story.image"
      :published="story.published"
      :is-featured="isFeatured"
    >
    </StoryCard>
  </section>
</template>

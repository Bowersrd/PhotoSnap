<script setup>
import { ref } from "vue";

const isChecked = ref(false);

defineEmits(["updateToggle"]);
</script>

<template>
  <label class="flex justify-between items-center">
    <input
      v-model="isChecked"
      type="checkbox"
      class="appearance-none peer"
      @change="$emit('updateToggle', isChecked)"
    />
    <span
      class="w-16 h-8 flex items-center flex-shrink-0 p-1 bg-gray rounded-full cursor-pointer transition-transform after:w-6 after:h-6 after:bg-black after:rounded-full peer-checked:after:translate-x-8 after:duration-300"
    ></span>
  </label>
</template>

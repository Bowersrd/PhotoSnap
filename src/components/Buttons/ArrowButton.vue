<script setup>
defineProps({
  isInverted: Boolean,
  isFullWidth: Boolean,
  spacing: {
    type: String,
    default: "mr-4",
  },
});
</script>

<template>
  <button class="flex uppercase text-xs font-bold" :class="
    [isInverted ? 'text-white' : 'text-black'],
    { 'w-full justify-between': isFullWidth }
  ">
    <span class="border-b border-[transparent]" :class="[
      spacing,
      isInverted ? 'hover:border-white' : 'hover:border-black',
    ]">
      <slot></slot>
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
      <g fill="none" fill-rule="evenodd" :stroke="isInverted ? '#fff' : '#000'">
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </svg>
  </button>
</template>

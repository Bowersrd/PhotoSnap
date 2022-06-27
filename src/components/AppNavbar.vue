<script setup>
import { ref } from "vue";
import SolidButton from "@/components/Buttons/SolidButton.vue";
import SvgIcon from "./SvgIcon.vue";

const isMobileActive = ref(false);
</script>

<template>
  <nav class="sticky top-0 z-50">
    <div
      class="flex justify-between items-center w-full h-full bg-white px-6 py-7"
    >
      <div>
        <SvgIcon
          name="logo"
          @click="$router.push('/'), (isMobileActive = false)"
        ></SvgIcon>
      </div>
      <div
        class="flex flex-col gap-1 w-5"
        @click="isMobileActive = !isMobileActive"
      >
        <span class="w-full h-[2px] bg-black"></span>
        <span class="w-full h-[2px] bg-black"></span>
      </div>
    </div>
    <div
      class="absolute -z-10 inset-0 w-full h-screen gradient-black"
      :class="{ hidden: !isMobileActive }"
    ></div>
    <div
      class="absolute -z-10 top-[4.5rem] left-0 w-full bg-white p-8 transition-transform duration-500 ease-in-out"
      :class="isMobileActive ? 'translate-y-0' : '-translate-y-full'"
    >
      <ul class="grid text-center font-bold uppercase tracking-[2.5px] gap-5">
        <li>
          <router-link to="/stories" @click="isMobileActive = false"
            >Stories</router-link
          >
        </li>
        <li>
          <router-link to="/features" @click="isMobileActive = false"
            >Features</router-link
          >
        </li>
        <li>
          <router-link to="/pricing" @click="isMobileActive = false"
            >Pricing</router-link
          >
        </li>
      </ul>
      <div class="w-full h-[1px] bg-gray my-5"></div>
      <SolidButton class="text-base tracking-[2px] w-full"
        >Get an invite</SolidButton
      >
    </div>
  </nav>
</template>

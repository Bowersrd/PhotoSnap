<script setup>
import { ref } from "vue";
import SolidButton from "@/components/Buttons/SolidButton.vue";
import SvgIcon from "./SvgIcon.vue";

const isMobileActive = ref(false);
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white">
    <div
      class="flex justify-between items-center bg-white px-6 py-7 max-w-6xl mx-auto md:py-4"
    >
      <div>
        <SvgIcon
          name="Logo"
          @click="$router.push('/'), (isMobileActive = false)"
        ></SvgIcon>
      </div>
      <div
        class="flex flex-col gap-1 w-5 md:hidden"
        @click="isMobileActive = !isMobileActive"
      >
        <span class="w-full h-[2px] bg-black"></span>
        <span class="w-full h-[2px] bg-black"></span>
      </div>
      <div
        class="absolute -z-10 inset-0 w-full h-screen gradient-black"
        :class="{ hidden: !isMobileActive }"
      ></div>
      <div
        class="absolute -z-10 top-[4.45rem] left-0 w-full bg-white p-8 transition-transform duration-500 ease-in-out md:static md:z-0 md:flex md:items-center md:p-0 md:max-w-fit"
        :class="
          isMobileActive
            ? 'translate-y-0'
            : '-translate-y-full md:translate-y-0'
        "
      >
        <ul
          class="grid text-center font-bold uppercase tracking-[2.5px] gap-5 md:flex md:text-xs"
        >
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
        <div class="w-full h-[1px] bg-gray my-5 md:hidden"></div>
        <SolidButton class="text-base tracking-[2px] w-full md:hidden"
          >Get an invite</SolidButton
        >
      </div>
      <SolidButton class="hidden tracking-[2px] md:block md:text-xs"
        >Get an invite</SolidButton
      >
    </div>
  </nav>
</template>

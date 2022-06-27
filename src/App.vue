<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <Navbar></Navbar>
  <RouterView />
  <AppFooter></AppFooter>
</template>

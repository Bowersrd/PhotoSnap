<script setup>
import ArrowButton from '../components/Buttons/ArrowButton.vue';
</script>

<template>
    <section class="relative">
        <div>
            <img class="w-full" src="@/assets/images/shared/mobile/bg-beta.jpg" alt="">
        </div>
        <div class="absolute top-16 text-white px-7">
            <h4 class="text-xl font-bold uppercase mb-6">We're in beta. Get your invite today!</h4>
            <ArrowButton isInverted>Get an invite</ArrowButton>
        </div>
        <div class="absolute top-0 left-7 h-[.375rem] w-1/3 gradient-accent"></div>
    </section>
</template>
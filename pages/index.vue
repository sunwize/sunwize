<script setup lang="ts">
import Hero from '~/components/sections/Hero.vue';
import Projects from '~/components/sections/Projects.vue';
import Experience from '~/components/sections/Experience.vue';
import Skills from '~/components/sections/Skills.vue';
import About from '~/components/sections/About.vue';
import ScrollButton from '~/components/ScrollButton.vue';
</script>

<template>
    <main class="h-screen overflow-y-auto md:snap-y md:snap-mandatory relative scroll-smooth leading-snug">
        <TopBar />
        <Hero class="snap-center snap-always" />
        <Projects class="snap-center snap-always" />
        <Experience class="snap-center snap-always" />
        <Skills class="snap-center snap-always" />
        <About class="snap-center snap-always" />

        <ScrollButton />
    </main>
</template>

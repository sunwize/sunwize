<template>
    <main class="h-screen overflow-y-auto md:snap-y md:snap-mandatory relative scroll-smooth leading-snug">
        <TopBar />
        <Hero
            class="snap-center snap-always"
            @scroll-to="scrollTo"
        />
        <Projects class="snap-center snap-always" />
        <Experience class="snap-center snap-always" />
        <Skills class="snap-center snap-always" />
        <About class="snap-center snap-always" />

        <ScrollButton />
    </main>
</template>

<script>
export default {
    name: "Index",
};
</script>

<script setup>
import TopBar from "~/components/TopBar.vue";
import Experience from "~/components/Experience.vue";
import Skills from "~/components/Skills.vue";
import About from "~/components/About.vue";
import ScrollButton from "~/components/ScrollButton.vue";

function scrollTo(id) {
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({
        behavior: "smooth",
    });
}
</script>

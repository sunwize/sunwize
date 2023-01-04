<template>
    <section
        id="experience"
        class="h-screen relative flex flex-col pt-16"
    >
        <h2 class="text-center uppercase opacity-50 tracking-[10px]">
            Experience
        </h2>
        <ul
            ref="scrollContainer"
            class="scrollbar-hidden flex flex-nowrap gap-10 w-full flex-1 overflow-x-auto snap-x snap-mandatory md:px-10 py-16"
        >
            <li
                v-for="(experience, index) in experiences"
                :key="index"
                class="flex-1 min-w-full h-full snap-center overflow-y-auto"
            >
                <article class="md:w-[650px] h-full mx-auto bg-gray-700/20 rounded-lg p-5 md:p-10">
                    <div class="flex items-center justify-center mx-auto">
                        <NuxtImg
                            v-motion
                            provider="cloudinary"
                            :src="experience.image"
                            :alt="experience.company"
                            fit="inside"
                            width="200"
                            height="100"
                            background="transparent"
                            quality="100"
                            :initial="{
                                opacity: 0,
                                x: -50
                            }"
                            :visible="{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    stiffness: 50,
                                    mass: 0.5
                                }
                            }"
                            :delay="100"
                        />
                    </div>
                    <h1 class="text-xl">
                        {{ experience.title }}
                    </h1>
                    <h2 class="text-sm font-bold mb-3">
                        {{ experience.company }}
                    </h2>
                    <ul class="flex items-center gap-3 mb-8">
                        <li
                            v-for="(key, i) in experience.stack"
                            :key="i"
                            :title="getStack(key).title"
                        >
                            <NuxtImg
                                provider="cloudinary"
                                :src="getStack(key).image"
                                :alt="getStack(key).title"
                                width="25"
                                height="25"
                            />
                        </li>
                    </ul>
                    <p class="text-sm font-light uppercase opacity-50 tracking-wide mb-3">
                        {{ format(experience.date_start, "LLL yyyy") }} - {{ format(experience.date_end, "LLL yyyy") }}
                    </p>
                    <ul class="list-disc text-xs sm:text-sm flex flex-col gap-2 pl-3 md:pl-0">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero semper, ullamcorper leo nec, suscipit enim. Vestibulum tincidunt mauris velit, non condimentum urna rhoncus sit amet.</li>
                        <li>In sapien sem, bibendum sed risus sagittis, tincidunt dictum nisl. Morbi finibus hendrerit vehicula. Nunc et eros nec elit sollicitudin lacinia id a neque.</li>
                        <li>Aliquam at nibh quam. Praesent ultrices sapien tristique nisl tristique congue. Maecenas magna lacus, tempor eget orci vel, venenatis eleifend risus.</li>
                    </ul>
                </article>
            </li>
        </ul>

        <button
            class="z-[1] absolute left-3 sm:left-10 top-24 md:top-1/2 md:-translate-y-1/2 opacity-50 hover:opacity-100 hover:bg-white/5 active:bg-white/10 rounded-full p-3"
            aria-label="Previous experience"
            @click.stop="previous()"
        >
            <mdicon name="arrow-left" />
        </button>
        <button
            class="z-[1] absolute right-3 sm:right-10 top-24 md:top-1/2 md:-translate-y-1/2 opacity-50 hover:opacity-100 hover:bg-white/5 active:bg-white/10 rounded-full p-3"
            aria-label="Next experience"
            @click.stop="next()"
        >
            <mdicon name="arrow-right" />
        </button>
    </section>
</template>

<script>
export default {
    name: "Experience",
};
</script>

<script setup>
import { format } from "date-fns";

const experiences = ref([
    {
        image: "/experiences/paper.png",
        company: "Paper Education",
        title: "Front-End Engineer",
        stack: ["vuejs", "javascript", "postgresql"],
        date_start: new Date("01/04/2022"),
        date_end: new Date(),
    },
    {
        image: "/experiences/eyeinmedia.png",
        company: "Eyein Media",
        title: "Software Engineer",
        stack: ["vuejs", "javascript", "capacitor", "mongodb"],
        date_start: new Date("01/03/2020"),
        date_end: new Date("01/03/2022"),
    },
]);

const stack = ref([
    {
        key: "nodejs",
        image: "/stack/nodejs.png",
        title: "Node.js",
    },
    {
        key: "vuejs",
        image: "/stack/vuejs.png",
        title: "Vue.js",
    },
    {
        key: "javascript",
        image: "/stack/javascript.png",
        title: "Javascript",
    },
    {
        key: "postgresql",
        image: "/stack/postgresql.png",
        title: "Postgres",
    },
    {
        key: "mongodb",
        image: "/stack/mongodb.png",
        title: "MongoDB",
    },
    {
        key: "capacitor",
        image: "/stack/capacitor.png",
        title: "Capacitor",
    },
]);

const scrollContainer = ref();

function previous() {
    scrollContainer.value.scrollBy({
        left: -100,
        behavior: "smooth",
    });
}

function next() {
    scrollContainer.value.scrollBy({
        left: 200,
        behavior: "smooth",
    });
}

function getStack(key) {
    return stack.value.find((s) => s.key === key);
}
</script>

<style lang="scss" scoped>

</style>

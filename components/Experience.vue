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
                class="flex-1 min-w-full h-full snap-center snap-always overflow-y-auto"
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
                    <h3 class="text-xl">
                        {{ experience.title }}
                    </h3>
                    <h4 class="text-sm font-bold mb-3">
                        {{ experience.company }}
                    </h4>
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
                                fit="inside"
                                width="25"
                                height="25"
                            />
                        </li>
                    </ul>
                    <p class="text-sm font-light uppercase opacity-50 tracking-wide mb-3">
                        {{ experience.date_start }} - {{ experience.date_end }}
                    </p>
                    <ul
                        class="text-xs sm:text-sm flex flex-col gap-4 pl-3 md:pl-0"
                        v-html="experience.description"
                    />
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

const formatDate = (date) => format(date, "LLL yyyy");

const experiences = ref([
    {
        image: "/experiences/paper.png",
        company: "Paper Education",
        title: "Full Stack Developer",
        description: `
            <li>
                <p class="badge">📚 Review center</p>
                <p>A platform that lets students upload essays and submit them for reviews.</p>
            </li>
            <li>
                <p class="badge">📐 Math missions</p>
                <p>A set of math exercises that students can use to assess their math skills.</p>
            </li>
            <li>
                <p class="badge">👩‍🏫 Practice center</p>
                <p>A "Math missions" expansion for other subjects like ELA.</p>
            </li>
            <li>
                <p class="badge">🌎 Content localization</p>
                <p>A database architecture to enable server side content localization.</p>
            </li>
            <li>
                <p class="badge">👩‍🔧 Content management system</p>
                <p>A back office tool to let teachers build on demand learning content for students.</p>
            </li>
        `,
        stack: ["vuejs", "reactjs", "javascript", "typescript", "postgresql", "strapi"],
        date_start: formatDate(new Date("01/04/2022")),
        date_end: "Now",
    },
    {
        image: "/experiences/eyeinmedia.png",
        company: "Eyein Media",
        title: "Software Engineer",
        description: `
            <li>
                <p class="badge">🦸‍♂️ Food Force</p>
                <p>A comprehensive platform encompassing food ordering apps (web and mobile), customized menu display websites, and order management/reservation systems.</p>
            </li>
            <li>
                <p class="badge">🛍️ Reserve&Shop</p>
                <p>A web/mobile application that enabled users to skip waiting in store lines during the initial lockdown.</p>
            </li>
            <li>
                <p class="badge">👴 OneGeneration</p>
                <p>A web/mobile application facilitating appointment scheduling between isolated individuals in long-term care homes and their families.</p>
            </li>
        `,
        stack: ["vuejs", "nuxtjs", "javascript", "capacitor", "postgresql", "mongodb"],
        date_start: formatDate(new Date("01/03/2020")),
        date_end: formatDate(new Date("01/03/2022")),
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
        key: "nuxtjs",
        image: "/stack/nuxtjs.png",
        title: "Nuxt.js",
    },
    {
        key: "reactjs",
        image: "/stack/reactjs.png",
        title: "React.js",
    },
    {
        key: "javascript",
        image: "/stack/javascript.png",
        title: "Javascript",
    },
    {
        key: "typescript",
        image: "/stack/typescript.png",
        title: "Typescript",
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
    {
        key: "strapi",
        image: "/stack/strapi.png",
        title: "Strapi",
    },
]);

const scrollContainer = ref();

const previous = () => {
    scrollContainer.value.scrollBy({
        left: -100,
        behavior: "smooth",
    });
};

const next = () => {
    scrollContainer.value.scrollBy({
        left: 200,
        behavior: "smooth",
    });
};

const getStack = (key) => {
    return stack.value.find((s) => s.key === key);
};
</script>

<style lang="scss">
.badge {
    @apply inline-block w-auto bg-white/10 rounded-2xl text-base font-medium tracking-wide mb-2 px-3 py-1;
}
</style>

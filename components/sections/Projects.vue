<template>
    <section
        id="projects"
        class="relative h-screen flex flex-col pt-16"
    >
        <div class="w-full absolute top-[25%] bg-gray-700/20 left-0 h-[60%] -skew-y-[6deg]" />
        <h2 class="z-[1] text-center uppercase opacity-50 tracking-[10px]">
            Projects
        </h2>
        <ul
            ref="scrollContainer"
            class="z-[1] scrollbar-hidden w-full overflow-x-auto flex flex-nowrap gap-28 sm:gap-0 snap-x snap-mandatory flex-1"
        >
            <li
                v-for="(project, index) in projects"
                :key="index"
                class="min-w-full snap-center snap-always"
            >
                <article class="h-full flex flex-col items-center justify-center">
                    <div
                        v-motion
                        class="relative mb-8"
                        :initial="{
                            opacity: 0,
                            y: -50
                        }"
                        :visible="{
                            opacity: 1,
                            y: 0,
                            transition: {
                                stiffness: 50,
                                mass: 0.5
                            }
                        }"
                        :delay="100"
                    >
                        <NuxtImg
                            provider="cloudinary"
                            :src="project.image"
                            :alt="project.name"
                            class="absolute top-2 left-1/2 -translate-x-1/2 object-cover"
                            width="190"
                            height="118"
                            :draggable="false"
                        />
                        <NuxtImg
                            provider="cloudinary"
                            src="/screen.png"
                            alt="Screen"
                            width="250"
                            height="144"
                            class="z-[1] relative block"
                            :draggable="false"
                        />
                    </div>
                    <a
                        :href="project.link"
                        target="_blank"
                        rel="noreferrer"
                        :aria-label="project.name"
                        :title="project.name"
                        class="flex items-center gap-1 hover:underline mb-5"
                    >
                        <h3 class="font-medium text-xl flex items-center gap-1">{{ project.name }}</h3>
                        <mdicon
                            name="open-in-new"
                            class="opacity-50"
                        />
                    </a>
                    <p class="w-full max-w-[650px] text-sm text-left px-3">
                        {{ project.description }}
                    </p>
                </article>
            </li>
        </ul>

        <button
            class="z-[1] absolute left-3 sm:left-10 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 hover:bg-white/5 active:bg-white/10 rounded-full p-3"
            aria-label="Previous project"
            @click.stop="previous()"
        >
            <mdicon name="arrow-left" />
        </button>
        <button
            class="z-[1] absolute right-3 sm:right-10 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 hover:bg-white/5 active:bg-white/10 rounded-full p-3"
            aria-label="Next project"
            @click.stop="next()"
        >
            <mdicon name="arrow-right" />
        </button>
    </section>
</template>

<script>
export default {
    name: "Projects",
};
</script>

<script setup>
const projects = ref([
    {
        name: "PAPER Education",
        description: `
            Educative platform to provide unlimited access to trained tutors so students can ask questions, work through problems and get their writings reviewed 24/7.
        `,
        image: "/projects/paper.png",
        link: "https://paper.co",
    },
    {
        name: "The Food Force",
        description: `
            A place to share what meals, snacks, desserts and refreshments you liked and from where, so that others can also Discover them.
        `,
        image: "/projects/thefoodforce.png",
        link: "https://thefoodforce.com",
    },
    {
        name: "Confetti",
        description: `
            A loyalty program for Place Rosemère shopping mall. Clients get to scan their purchase receipts to collect confetti points and win amazing prizes.
        `,
        image: "/projects/confetti.png",
        link: "https://confetti.placerosemere.com",
    },
]);
const scrollContainer = ref();

function previous() {
    scrollContainer.value.scrollBy({
        left: -200,
        behavior: "smooth",
    });
}

function next() {
    scrollContainer.value.scrollBy({
        left: 200,
        behavior: "smooth",
    });
}
</script>

<style lang="scss" scoped>
@keyframes test {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100px);
    }
}

.animate {
    animation: test 1s ease-in-out forwards;
}
</style>

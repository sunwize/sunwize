<template>
    <section class="h-screen relative flex items-center justify-center overflow-x-hidden">
        <div class="small-circle border-2 border-gray-700 rounded-full" />
        <div class="big-circle border-2 border-gray-700 rounded-full" />

        <article class="z-[1] w-full text-center">
            <figure class="w-[100px] sm:w-[150px] mx-auto avatar mb-4">
                <NuxtImg
                    provider="cloudinary"
                    src="/avatar.jpg"
                    alt="avatar"
                    quality="100"
                    class="rounded-full"
                    :draggable="false"
                    width="150"
                    height="150"
                />
            </figure>
            <h1 class="uppercase tracking-[5px] opacity-50 text-xs mb-2">
                Front end Developer
            </h1>
            <p class="font-bold text-2xl sm:text-3xl mb-5">
                <span
                    v-show="loaded"
                    ref="typing"
                >
                    <span>Code is poetry ✨</span>
                    <span>Code smarter, not harder 🧠</span>
                    <span>AI is the future 🤖</span>
                    <span>Coffee is my fuel ☕</span>
                </span>
                <span>&nbsp;</span>
            </p>

            <ul class="flex items-center justify-center gap-5 text-xs uppercase tracking-wide">
                <li
                    v-for="(section, index) in sections"
                    :key="index"
                    class="cursor-pointer opacity-50 hover:underline hover:opacity-100"
                    @click.stop="emit('scroll-to', section.id)"
                >
                    {{ section.name }}
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
export default {
    name: "Hero",
};
</script>

<script setup>
import { useTypingText } from "~/composables/useTypingText";

const emit = defineEmits(["scroll-to"]);

const typing = ref();

const sections = ref([
    {
        name: "Projects",
        id: "projects",
    },
    {
        name: "Experience",
        id: "experience",
    },
    {
        name: "Skills",
        id: "skills",
    },
    {
        name: "About",
        id: "about",
    },
]);

const { loaded } = useTypingText(typing);
</script>

<style lang="scss" scoped>
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
}

@keyframes pulse-down {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9);
    }
}

@keyframes anchor {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

@keyframes slide-top {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.small-circle, .big-circle {
    position: absolute;
}

.small-circle {
    width: calc(100vw - 30px);
    height: calc(100vw - 30px);
    max-width: 500px;
    max-height: 500px;
    animation: pulse 2s ease-in-out;
}

.big-circle {
    width: calc(100vw - 20px);
    height: calc(100vw - 20px);
    max-width: 510px;
    max-height: 510px;
    animation: pulse-down 2s ease-in-out;
}

.avatar {
    animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>

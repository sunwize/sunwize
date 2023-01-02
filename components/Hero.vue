<template>
    <section class="h-screen relative flex items-center justify-center overflow-x-hidden">
        <div class="small-circle border-2 border-gray-700 rounded-full" />
        <div class="big-circle border-2 border-gray-700 rounded-full" />

        <article class="z-[1] w-full text-center">
            <NuxtImg
                provider="cloudinary"
                src="/avatar.jpg"
                alt="avatar"
                width="100"
                height="100"
                quality="100"
                class="avatar block mx-auto rounded-full mb-4"
                :draggable="false"
            />
            <h1 class="uppercase tracking-[5px] opacity-50 text-xs mb-2">
                Front-end Engineer
            </h1>
            <h2 class="font-bold text-3xl mb-5">
                <span ref="typing" />
                <span class="anchor">&nbsp;</span>
            </h2>

            <ul class="flex items-center justify-center gap-5 opacity-50 text-xs uppercase tracking-wide">
                <li
                    v-for="(section, index) in sections"
                    :key="index"
                    class="cursor-pointer hover:underline"
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

useTypingText(typing, [
    "Hi, my name is Colin.",
    "I'm a coffee lover.",
    "Here is my portfolio.",
    "Feel free to explore it!",
]);
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
    max-width: 400px;
    max-height: 400px;
    animation: pulse 2s ease-in-out;
}

.big-circle {
    width: calc(100vw - 20px);
    height: calc(100vw - 20px);
    max-width: 410px;
    max-height: 410px;
    animation: pulse-down 2s ease-in-out;
}

.anchor {
    display: inline-block;
    width: .25rem;
    background: rgba(white, .4);
    animation: anchor 1.2s ease-in-out infinite;
    margin-left: .5rem;
}

.avatar {
    animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
</style>

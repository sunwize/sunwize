<template>
    <section
        id="about"
        class="h-screen flex flex-col pt-16"
    >
        <h1 class="text-center uppercase opacity-50 tracking-[10px]">
            About
        </h1>
        <div
            ref="content"
            class="max-w-[650px] w-full mx-auto text-sm sm:text-base leading-6 sm:leading-8 flex flex-col gap-3 flex-1 overflow-y-auto py-16 px-3"
        />
    </section>
</template>

<script>
export default {
    name: "About",
};
</script>

<script setup>
import useTypingParagraph from "~/composables/useTypingParagraph.js";

const content = ref();

useTypingParagraph(content, [
    `
        Hey! My name is Colin. 👋
    `,
    `
        I'm a web developer specialized in front-end.
        What drives me the most is to discover and take advantage of the new possibilities and opportunities that the web is giving us.
        That's why I carefully keep myself informed about this constantly evolving world.
    `,
    `
        I think being a great developer is not so much about being a good coder, but rather being excellent at problem solving.
        I value rigor and quality in my productions and believe that teamwork is key to learning and success.
    `,
    `
        If you are looking for a dedicated and ambitious front-end developer, you have come to the right place.
        I look forward to the opportunity to work with you and create something amazing together! 🤩
    `,
], {
    delayBetweenLetters: 30,
});
</script>

<style scoped>

</style>

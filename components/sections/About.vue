<script setup lang="ts">
import { useTypingParagraph } from '~/composables/useTypingParagraph';

const content = ref();

useTypingParagraph(content, {
  delayBetweenLetters: 10,
});
</script>

<template>
    <section
        id="about"
        class="h-screen flex flex-col pt-16"
    >
        <h2 class="text-center uppercase opacity-50 tracking-[10px]">
            About
        </h2>
        <div
            ref="content"
            class="max-w-[650px] w-full mx-auto text-sm sm:text-base leading-6 sm:leading-8 flex flex-col gap-3 flex-1 overflow-y-auto py-16 px-3"
        >
            <p>
                Hey! My name is Colin. 👋
            </p>
            <p>
                I'm a full stack web developer.
                What drives me the most is to discover and take advantage of the new possibilities and opportunities that the web is giving us.
                That's why I carefully keep myself informed about this constantly evolving world.
            </p>
            <p>
                I think being a great developer is not so much about being a good coder, but rather being excellent at problem solving.
                I value rigor and quality in my productions and believe that teamwork is key to learning and success.
            </p>
            <p>
                If you are looking for a dedicated and ambitious software engineer, you have come to the right place.
                I look forward to the opportunity to work with you and create something amazing together! 🚀
            </p>
        </div>
    </section>
</template>

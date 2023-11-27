<script setup lang="ts">
import { experiencesFixtures } from 'assets/fixtures/experiences';
import { stackFixtures } from 'assets/fixtures/stack';

const experiences = ref(experiencesFixtures);
const stack = ref(stackFixtures);
const scrollContainer = ref<HTMLElement>();

const previous = () => {
  scrollContainer.value?.scrollBy({
    left: -500,
    behavior: 'smooth',
  });
};

const next = () => {
  scrollContainer.value?.scrollBy({
    left: 500,
    behavior: 'smooth',
  });
};

const getStack = (key: string) => {
  return stack.value.find((s) => s.key === key)!;
};
</script>

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
            class="scrollbar-hidden flex flex-nowrap gap-10 w-full flex-1 overflow-x-auto snap-x snap-mandatory py-4 md:px-10 md:py-16"
        >
            <li
                v-for="(experience, index) in experiences"
                :key="index"
                class="flex-1 min-w-full h-full snap-center snap-always overflow-y-auto"
            >
                <article class="md:w-[650px] h-full overflow-auto scrollbar-hidden mx-auto bg-gray-700/20 rounded-lg p-5 md:p-10">
                    <div class="flex items-center justify-center mx-auto">
                        <div
                            v-motion
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
                        >
                            <NuxtImg
                                provider="cloudinary"
                                :src="experience.image"
                                :alt="experience.company"
                                fit="inside"
                                width="200"
                                height="100"
                                background="transparent"
                                quality="100"
                                class="hidden md:block"
                            />
                            <NuxtImg
                                provider="cloudinary"
                                :src="experience.image"
                                :alt="experience.company"
                                fit="inside"
                                width="150"
                                height="75"
                                background="transparent"
                                quality="100"
                                class="md:hidden"
                            />
                        </div>
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
                        class="text-xs sm:text-sm flex flex-col gap-4"
                        v-html="experience.description"
                    />
                </article>
            </li>
        </ul>

        <button
            class="z-[1] absolute left-3 sm:left-10 top-12 md:top-1/2 md:-translate-y-1/2 opacity-50 hover:opacity-100 hover:bg-white/5 active:bg-white/10 rounded-full p-3"
            aria-label="Previous experience"
            @click.stop="previous()"
        >
            <mdicon name="arrow-left" />
        </button>
        <button
            class="z-[1] absolute right-3 sm:right-10 top-12 md:top-1/2 md:-translate-y-1/2 opacity-50 hover:opacity-100 hover:bg-white/5 active:bg-white/10 rounded-full p-3"
            aria-label="Next experience"
            @click.stop="next()"
        >
            <mdicon name="arrow-right" />
        </button>
    </section>
</template>

<style lang="scss">
.badge {
    @apply inline-block w-auto bg-white/10 rounded-2xl text-sm sm:text-base font-medium tracking-wide mb-2 px-3 py-1;
}
</style>

<script setup lang="ts">
import { experiencesFixtures } from 'assets/fixtures/experiences';
import { stackFixtures } from 'assets/fixtures/stack';
import Card from '~/components/ui/Card.vue';
import Pagination from '~/components/ui/Pagination.vue';
import { useScroller } from '~/composables/useScroller';
import ZoomImage from '~/components/ui/ZoomImage.vue';

const experiences = ref(experiencesFixtures);
const stack = ref(stackFixtures);
const experienceScroll = ref<HTMLElement>();

const {
  index: experienceIndex,
  scrollToIndex: scrollToExperience,
} = useScroller(experienceScroll);

const getProjectScrollId = (index: number) => `experience-projects-${index}`;

const previousProject = () => {
  const element = document.querySelector(`#${getProjectScrollId(experienceIndex.value)}`)!;
  element.scrollBy({
    left: -200,
    behavior: 'smooth',
  });
};

const nextProject = () => {
  const element = document.querySelector(`#${getProjectScrollId(experienceIndex.value)}`)!;
  element.scrollBy({
    left: 200,
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
        <h2 class="text-center uppercase opacity-50 tracking-[10px] mb-4 md:mb-16">
            Experience
        </h2>

        <Pagination
            v-model="experienceIndex"
            :max="experiences.length"
            class="mb-2 md:mb-4"
            @update:model-value="scrollToExperience"
        />
        <ul
            ref="experienceScroll"
            class="scrollbar-hidden scroll-smooth flex flex-nowrap gap-10 w-full flex-1 overflow-x-auto snap-x snap-mandatory pb-4 px-1 md:px-10 md:pb-16"
        >
            <li
                v-for="(experience, index) in experiences"
                :key="index"
                class="flex-1 min-w-full h-full snap-center snap-always overflow-y-auto flex justify-center"
            >
                <Card class="flex flex-col h-full flex-1 w-full max-w-[750px]">
                    <div class="flex justify-between mb-4 sm:mb-0">
                        <div>
                            <h3 class="text-2xl sm:text-3xl font-light">
                                {{ experience.title }}
                            </h3>
                            <p class="text-lg sm:text-xl font-bold">
                                {{ experience.company }}
                            </p>
                            <p class="block sm:hidden font-light opacity-70 uppercase tracking-wide">
                                {{ experience.date_start }} - {{ experience.date_end }}
                            </p>
                        </div>
                        <NuxtImg
                            :src="experience.image"
                            :alt="experience.company"
                            provider="cloudinary"
                            width="150"
                            height="75"
                            quality="100"
                            fit="inside"
                            class="hidden sm:block"
                        />
                    </div>
                    <div class="flex justify-between">
                        <ul class="flex items-center gap-3">
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
                        <p class="hidden sm:block font-light opacity-70 uppercase tracking-wide">
                            {{ experience.date_start }} - {{ experience.date_end }}
                        </p>
                    </div>

                    <div class="flex items-center my-8">
                        <hr class="flex-1 opacity-30">
                        <div class="flex items-center gap-3 mx-2">
                            <button
                                class="flex items-center justify-center hover:bg-white/10 active:bg-white/30 rounded-full p-1"
                                aria-label="Previous project"
                                @click.stop="previousProject()"
                            >
                                <mdicon
                                    name="chevron-left"
                                    width="25"
                                    height="25"
                                />
                            </button>
                            <p class="text-lg font-bold uppercase tracking-widest opacity-50">
                                Projects
                            </p>
                            <button
                                class="flex items-center justify-center hover:bg-white/10 active:bg-white/30 rounded-full p-1"
                                aria-label="Next project"
                                @click.stop="nextProject()"
                            >
                                <mdicon
                                    name="chevron-right"
                                    width="25"
                                    height="25"
                                />
                            </button>
                        </div>
                        <hr class="flex-1 opacity-30">
                    </div>

                    <div class="flex-1">
                        <ul
                            :id="getProjectScrollId(index)"
                            class="z-[1] scrollbar-hidden w-full h-full overflow-x-auto flex flex-nowrap gap-28 snap-x snap-mandatory flex-1"
                        >
                            <li
                                v-for="(project, projectIndex) in experience.projects"
                                :key="projectIndex"
                                class="flex sm:gap-3 h-full min-w-full snap-center snap-always"
                            >
                                <div class="flex-[2]">
                                    <h4 class="text-xl font-bold tracking-wide inline-block bg-white/10 rounded-3xl py-2 px-3 mb-3">
                                        {{ project.title }}
                                    </h4>
                                    <p class="text-lg">
                                        {{ project.description }}
                                    </p>
                                </div>
                                <div v-if="project.image">
                                    <ZoomImage
                                        :src="project.image"
                                        :alt="project.title"
                                        width="250"
                                        class="hidden sm:block rounded-2xl overflow-hidden"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </li>
        </ul>
    </section>
</template>

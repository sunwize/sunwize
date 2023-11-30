<script setup lang="ts">
import { projectsFixtures } from 'assets/fixtures/projects';
import { stackFixtures } from 'assets/fixtures/stack';
import Card from '~/components/ui/Card.vue';
import ZoomImage from '~/components/ui/ZoomImage.vue';
import Pagination from '~/components/ui/Pagination.vue';

const projects = ref(projectsFixtures);
const projectScroll = ref<HTMLElement>();

const {
  index: projectIndex,
  scrollToIndex: scrollToProject,
} = useScroller(projectScroll);

const getStack = (key: string) => {
  return stackFixtures.find((s) => s.key === key)!;
};
</script>

<template>
    <section
        id="projects"
        class="relative h-screen flex flex-col pt-16"
    >
        <div class="w-full absolute top-[25%] bg-gray-700/20 left-0 h-[60%] -skew-y-[6deg]" />
        <h2 class="z-[1] text-center uppercase opacity-50 tracking-[10px] mb-4 md:mb-16">
            Projects
        </h2>

        <Pagination
            v-model="projectIndex"
            :max="projects.length"
            class="mb-2 md:mb-4"
            @update:model-value="scrollToProject"
        />
        <ul
            ref="projectScroll"
            class="z-[1] scrollbar-hidden w-full overflow-x-auto scroll-smooth flex flex-nowrap gap-10 snap-x snap-mandatory flex-1 pb-1 px-1 md:px-10 md:pb-16"
        >
            <li
                v-for="(project, index) in projects"
                :key="index"
                class="min-w-full h-full snap-center snap-always flex justify-center"
            >
                <Card class="flex flex-col h-full flex-1 w-full max-w-[650px]">
                    <ZoomImage
                        :alt="project.title"
                        :src="project.image"
                        fit="cover"
                        class="shrink-0 rounded-lg overflow-hidden"
                    />
                    <main class="flex flex-col h-full pt-3 sm:pt-5 md:pt-8 overflow-hidden mb-3">
                        <h3 class="text-3xl font-bold mb-3">
                            {{ project.title }}
                        </h3>
                        <p class="opacity-70 flex-1 overflow-y-auto">
                            {{ project.description }}
                        </p>
                    </main>
                    <footer class="flex items-center justify-between shrink-0 gap-3 mt-auto">
                        <ul class="flex items-center gap-3">
                            <li
                                v-for="(key, i) in project.stack"
                                :key="i"
                            >
                                <NuxtImg
                                    provider="cloudinary"
                                    :src="getStack(key).image"
                                    :alt="getStack(key).title"
                                    :title="getStack(key).title"
                                    fit="inside"
                                    width="30"
                                    height="30"
                                />
                            </li>
                        </ul>
                        <ul class="flex items-center gap-3">
                            <li>
                                <a
                                    :href="project.github"
                                    target="_blank"
                                    class="opacity-50 hover:opacity-100"
                                >
                                    <mdicon
                                        name="github"
                                        width="30"
                                        height="30"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    :href="project.website"
                                    target="_blank"
                                    class="opacity-50 hover:opacity-100"
                                >
                                    <mdicon
                                        name="earth"
                                        width="30"
                                        height="30"
                                    />
                                </a>
                            </li>
                        </ul>
                    </footer>
                </Card>
            </li>
        </ul>
    </section>
</template>

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

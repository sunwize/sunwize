<script setup>
import { skillsFixtures } from 'assets/fixtures/skills';

const skills = ref(skillsFixtures);
</script>

<template>
    <section
        id="skills"
        class="h-screen flex flex-col pt-16"
    >
        <h2 class="text-center uppercase opacity-50 tracking-[10px]">
            Skills
        </h2>
        <ul class="max-w-[650px] mx-auto grid grid-cols-3 md:grid-cols-4 justify-items-center gap-5 pt-16 md:pt-28">
            <li
                v-for="(skill, index) in skills"
                :key="index"
                v-motion
                class="w-[25vw] h-[25vw] md:w-[120px] md:h-[120px] flex flex-col items-center justify-center gap-1 rounded-full border border-gray-700 p-5"
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
                :delay="index * 100"
            >
                <NuxtImg
                    provider="cloudinary"
                    :src="skill.image"
                    :alt="`${skill.title} logo`"
                    class="min-w-[80%] max-w-[80%] aspect-square object-contain"
                    width="100"
                    height="100"
                    fit="inside"
                    background="transparent"
                />
                <p class="text-xs opacity-50 tracking-wide">
                    {{ skill.title }}
                </p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.skills {
    grid-template-columns: repeat(4, 100px);
}
</style>

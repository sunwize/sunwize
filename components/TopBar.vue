<template>
    <nav
        class="fixed z-10 top-0 left-0 w-full"
        :class="classList"
    >
        <ul class="max-w-[650px] mx-auto flex items-center gap-5 p-3">
            <li
                v-for="(link, index) in links"
                :key="index"
                class="opacity-50 hover:opacity-100 cursor-pointer"
            >
                <a
                    :href="link.href"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="link.icon"
                    :title="link.title"
                >
                    <mdicon :name="link.icon" />
                </a>
            </li>
            <li class="ml-auto">
                <a
                    href="/resume.pdf"
                    class="border border-white hover:bg-white/10 active:bg-white/20 flex items-center gap-1 rounded-3xl px-4 py-2"
                >
                    <mdicon name="cloud-download" />
                    My resume
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "TopBar",
};
</script>

<script setup>
import { useScroll } from "@vueuse/core";

const links = ref([
    {
        title: "Github",
        icon: "github",
        href: "https://github.com/sunwize",
    },
    {
        title: "LinkedIn",
        icon: "linkedin",
        href: "https://www.linkedin.com/in/colin-clisson-6b675b142",
    },
    {
        title: "Email",
        icon: "at",
        href: "mailto:colinclissonhg@gmail.com",
    },
]);
const classList = ref("");

onMounted(() => {
    const { y } = useScroll(ref(document.querySelector("main")));

    watch(y, (value) => {
        classList.value = value > 200 ? "bg-background" : "";
    });
});
</script>

<style lang="scss" scoped>
nav {
    transition: background-color 150ms ease;
}
</style>

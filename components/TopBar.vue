<template>
    <nav class="fixed z-10 top-0 left-0 w-full bg-background">
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
        </ul>
    </nav>
</template>

<script>
export default {
    name: "TopBar",
};
</script>

<script setup>
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
</script>

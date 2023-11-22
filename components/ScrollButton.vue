<template>
    <div class="fixed z-[1] left-1/2 bottom-5 md:bottom-10 -translate-x-1/2">
        <button
            v-if="visible"
            class="bg-gray-700/50 rounded-full text-white/50 hover:text-white p-1"
            @click.stop="onClick"
        >
            <mdicon
                width="50"
                height="50"
                name="chevron-down"
            />
        </button>
    </div>
</template>

<script>
export default {
    name: "ScrollButton",
};
</script>

<script setup>
import { useScroll } from "@vueuse/core";

const TIMEOUT = 2000;
const LAST_PAGE = 4;

const animating = ref(false);
const page = ref(0);
const visible = computed(() => animating.value && page.value < LAST_PAGE);

function onClick() {
    const scrollContainer = document.querySelector("main");
    scrollContainer.scrollBy(0, 100);
    animating.value = false;

    if (page.value < LAST_PAGE) {
        setTimeout(() => {
            animating.value = true;
        }, TIMEOUT);
    }
}

onMounted(() => {
    const { y } = useScroll(document.querySelector("main"));

    watch(y, (val) => {
        page.value = Math.round(val / window.innerHeight);
    });

    setTimeout(() => {
        animating.value = true;
    }, TIMEOUT);
});
</script>

<style lang="scss" scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(8px);
    }
}

button {
    animation: fade-in ease 1s, bounce ease-in-out 1.5s infinite;
}
</style>

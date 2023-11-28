<script setup lang="ts">
defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <ul class="flex items-center justify-center gap-4">
        <li
            v-for="i in max"
            :key="i"
        >
            <button
                class="w-3 h-3 bg-white/25 rounded-full"
                :class="{ '!bg-white': i === modelValue + 1 }"
                @click.stop="emit('update:modelValue', i - 1)"
            />
        </li>
    </ul>
</template>

<style scoped lang="scss">

</style>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    default: 'cloudinary',
  },
  width: {
    type: [String, Number],
    default: 'auto',
  },
  height: {
    type: [String, Number],
    default: 'auto',
  },
  fit: {
    type: String,
    default: 'inside',
  },
  quality: {
    type: [String, Number],
    default: 100,
  },
});

const visible = ref(false);
</script>

<template>
    <div class="relative">
        <NuxtImg
            :src="src"
            :alt="alt"
            :provider="provider"
            :width="width"
            :height="height"
            :fit="fit"
            :quality="quality"
            :draggable="false"
        />
        <button
            class="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center cursor-pointer"
            @click.stop="visible = true"
        >
            <mdicon
                name="magnify-plus-outline"
                width="50"
                height="50"
            />
        </button>

        <Teleport to="body">
            <button
                v-if="visible"
                class="fixed z-20 top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center cursor-pointer"
                @click.stop="visible = false"
            >
                <NuxtImg
                    :src="src"
                    :alt="alt"
                    :provider="provider"
                    width="600"
                    :fit="fit"
                    :quality="quality"
                    class="cursor-default"
                    @click.stop
                />
                <button class="absolute top-3 right-3 opacity-50 hover:opacity-100">
                    <mdicon
                        name="close"
                        width="35"
                        height="35"
                    />
                </button>
            </button>
        </Teleport>
    </div>
</template>

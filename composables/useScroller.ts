import type { Ref } from 'vue';

export const useScroller = (element: Ref<HTMLElement | undefined>) => {
  const index = ref(0);
  const canScrollRight = ref(false);
  const canScrollLeft = ref(false);
  let indexToSet = 0;

  const checkScrollable = () => {
    if (!element.value) {
      return;
    }

    const width = element.value.clientWidth - parseInt(getComputedStyle(element.value).paddingLeft);
    canScrollRight.value = element.value.scrollLeft < width;
    canScrollLeft.value = element.value.scrollLeft > 0;
  };

  const onScroll = (event: Event) => {
    const element = event.target as HTMLElement;
    const width = element.clientWidth - parseInt(getComputedStyle(element).paddingLeft);
    indexToSet = Math.floor(element.scrollLeft / width);
  };

  const onScrollEnd = () => {
    index.value = indexToSet;
    checkScrollable();
  };

  const scrollToIndex = (index: number) => {
    if (!element.value) {
      return;
    }

    const width = element.value.clientWidth - parseInt(getComputedStyle(element.value).paddingLeft);
    element.value.scrollLeft = index * width;
  };

  onMounted(() => {
    element.value?.addEventListener('scroll', onScroll);
    element.value?.addEventListener('scrollend', onScrollEnd);
    checkScrollable();
  });

  onUnmounted(() => {
    element.value?.removeEventListener('scroll', onScroll);
    element.value?.removeEventListener('scrollend', onScrollEnd);
  });

  return {
    index,
    canScrollLeft,
    canScrollRight,
    scrollToIndex,
  };
};

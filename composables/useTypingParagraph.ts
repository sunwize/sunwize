import type { Ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

interface Options {
    delayBetweenLetters?: number
    delayBetweenSentences?: number
}

export const useTypingParagraph = (element: Ref<HTMLElement>, options: Options = {}) => {
  const delayBetweenLetters = options.delayBetweenLetters ?? 50;
  const delayBetweenSentences = options.delayBetweenSentences ?? 1200;
  const sentenceIndex = ref(0);
  const letterIndex = ref(0);
  const animationStarted = ref(false);

  const sentences: string[] = [];

  const init = () => {
    Array.from(element.value.children).forEach((p) => {
      sentences.push(p.textContent ?? '');
      p.textContent = '';
    });
  };

  const typeParagraph = () => {
    if (letterIndex.value < sentences[sentenceIndex.value].length) {
      element.value.children[sentenceIndex.value].innerHTML = sentences[sentenceIndex.value].slice(0, letterIndex.value) + '<span aria-hidden=\'true\' class=\'caret\'></span>';
      letterIndex.value++;
      setTimeout(typeParagraph, delayBetweenLetters);
    } else if (sentenceIndex.value < sentences.length - 1) {
      element.value.children[sentenceIndex.value].innerHTML = sentences[sentenceIndex.value].slice(0, letterIndex.value) + '<span aria-hidden=\'true\' class=\'caret\'></span>';
      setTimeout(() => {
        element.value.children[sentenceIndex.value].innerHTML = sentences[sentenceIndex.value].slice(0, letterIndex.value);
        sentenceIndex.value++;
        letterIndex.value = 0;
        typeParagraph();
      }, delayBetweenSentences);
    } else {
      element.value.children[sentenceIndex.value].innerHTML = sentences[sentenceIndex.value].slice(0, letterIndex.value);
    }
  };

  onMounted(() => {
    useIntersectionObserver(element, ([{ isIntersecting }]) => {
      if (isIntersecting && !animationStarted.value) {
        init();
        animationStarted.value = true;
        typeParagraph();
      }
    });
  });
};

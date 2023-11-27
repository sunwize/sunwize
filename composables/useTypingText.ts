import type { Ref } from 'vue';

interface Options {
    delayBetweenLetters?: number
    delayBetweenSentences?: number
}

export const useTypingText = (element: Ref<HTMLElement>, options: Options = {}) => {
  const delayBetweenLetters = options.delayBetweenLetters ?? 50;
  const delayBetweenSentences = options.delayBetweenSentences ?? 1500;

  const loaded = ref(false);
  const sentenceIndex = ref(0);
  const letterIndex = ref(0);

  const sentences: string[] = [];

  function init() {
    Array.from(element.value.children).forEach((child) => {
      sentences.push(child.textContent ?? '');
    });
    element.value.innerHTML = '';
    loaded.value = true;
  }

  function typeText() {
    if (letterIndex.value <= sentences[sentenceIndex.value].length) {
      element.value.innerHTML = sentences[sentenceIndex.value].slice(0, letterIndex.value) + '<span aria-hidden=\'true\' class=\'caret\'></span>';
      letterIndex.value++;
      setTimeout(typeText, delayBetweenLetters);
    } else {
      setTimeout(removeText, delayBetweenSentences);
    }
  }

  function removeText() {
    if (letterIndex.value > 0) {
      element.value.innerHTML = element.value.textContent?.slice(0, letterIndex.value - 1) + '<span aria-hidden=\'true\' class=\'caret\'></span>';
      letterIndex.value--;

      setTimeout(removeText, delayBetweenLetters);
    } else {
      sentenceIndex.value = (sentenceIndex.value + 1) % sentences.length;
      typeText();
    }
  }

  onMounted(() => {
    init();
    typeText();
  });

  return {
    loaded,
  };
};

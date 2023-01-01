import { useIntersectionObserver } from "@vueuse/core";

export default function useTypingParagraph(element, sentences, options = {}) {
    const delayBetweenLetters = options.delayBetweenLetters ?? 50;
    const delayBetweenSentences = options.delayBetweenLetters ?? 1500;
    const sentenceIndex = ref(0);
    const letterIndex = ref(0);
    const animationStarted = ref(false);

    function init() {
        sentences.forEach(() => {
            const p = document.createElement("p");
            element.value.appendChild(p);
        });
    }

    function typeParagraph() {
        if (letterIndex.value < sentences[sentenceIndex.value].length) {
            element.value.children[sentenceIndex.value].textContent += sentences[sentenceIndex.value].charAt(letterIndex.value);
            letterIndex.value++;
            setTimeout(typeParagraph, delayBetweenLetters);
        } else if(sentenceIndex.value < sentences.length - 1) {
            sentenceIndex.value++;
            letterIndex.value = 0;
            setTimeout(typeParagraph, delayBetweenSentences);
        }
    }

    onMounted(() => {
        init();
        useIntersectionObserver(element, ([{ isIntersecting }]) => {
            if (isIntersecting && !animationStarted.value) {
                animationStarted.value = true;
                typeParagraph();
            }
        });
    });
}

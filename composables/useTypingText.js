export function useTypingText(element, sentences, options = {
    delayBetweenLetters: 50,
    delayBetweenSentences: 1500,
}) {
    const sentenceIndex = ref(0);
    const letterIndex = ref(0);

    function typeText() {
        if (letterIndex.value < sentences[sentenceIndex.value].length) {
            element.value.textContent += sentences[sentenceIndex.value].charAt(letterIndex.value);
            letterIndex.value++;
            setTimeout(typeText, options.delayBetweenLetters);
        } else {
            setTimeout(removeText, options.delayBetweenSentences);
        }
    }

    function removeText() {
        if (letterIndex.value > 0) {
            element.value.textContent = element.value.textContent.slice(0, letterIndex.value - 1);
            letterIndex.value--;

            setTimeout(removeText, options.delayBetweenLetters);
        } else {
            sentenceIndex.value = (sentenceIndex.value + 1) % sentences.length;
            typeText();
        }
    }

    onMounted(() => {
        element.value.textContent = "";
        typeText();
    });
}
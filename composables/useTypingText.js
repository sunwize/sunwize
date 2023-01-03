export function useTypingText(element, options = {
    delayBetweenLetters: 50,
    delayBetweenSentences: 1500,
}) {
    const sentenceIndex = ref(0);
    const letterIndex = ref(0);

    const sentences = [];

    function init() {
        Array.from(element.value.children).forEach((child) => {
            sentences.push(child.textContent);
        });
        element.value.innerHTML = "";
    }

    function typeText() {
        if (letterIndex.value <= sentences[sentenceIndex.value].length) {
            element.value.innerHTML = sentences[sentenceIndex.value].slice(0, letterIndex.value) + "<span aria-hidden='true' class='caret'></span>";
            letterIndex.value++;
            setTimeout(typeText, options.delayBetweenLetters);
        } else {
            setTimeout(removeText, options.delayBetweenSentences);
        }
    }

    function removeText() {
        if (letterIndex.value > 0) {
            element.value.innerHTML = element.value.textContent.slice(0, letterIndex.value - 1) + "<span aria-hidden='true' class='caret'></span>";
            letterIndex.value--;

            setTimeout(removeText, options.delayBetweenLetters);
        } else {
            sentenceIndex.value = (sentenceIndex.value + 1) % sentences.length;
            typeText();
        }
    }

    onMounted(() => {
        init();
        typeText();
    });
}

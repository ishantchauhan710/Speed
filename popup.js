function enableSpeedMode() {

  function formatWord(word, centerCharacter) {
    const primaryLetters = word.substring(0, centerCharacter);
    const secondaryLetters = word.substring(centerCharacter, word.length);
    return `<b>${primaryLetters}</b>${secondaryLetters}`;
  }

  const paragraphs = document.getElementsByTagName("p");

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i].textContent;
    const words = paragraph.split(/[ \t]+/);

    const formattedWords = words
      .map((word) => {
        if (word.length <= 2) {
          return word;
        } else if (word.length <= 4) {
          return formatWord(word, 2);
        } else {
          return formatWord(word, 3);
        }
      })
      .join(" ");

    paragraphs[i].innerHTML = formattedWords;
  }
}

document.getElementById("btnEnableSpeedMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: enableSpeedMode,
    });
  });
});

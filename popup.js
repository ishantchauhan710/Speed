const enableSpeedMode = () => {
  const formatWord = (word, centerCharacter) => {
    const primaryLetters = word.substring(0, centerCharacter);
    const secondaryLetters = word.substring(centerCharacter, word.length);
    return `<b>${primaryLetters}</b>${secondaryLetters}`;
  };

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

const applyPoppinsFont = () => {
  alert("Poppins");
};

const applyRobotoFont = () => {
  alert("Roboto");
};

const applyOpenSansFont = () => {
  alert("Open Sans");
};

const applyMontserratFont = () => {
  alert("Montserrat");
};

const applyLatoFont = () => {
  alert("Lato");
};

const applyMerriweatherFont = () => {
  alert("Merriweather");
};

const applyLexendFont = () => {
  alert("Lexend");
};

document.getElementById("btnEnableSpeedMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: enableSpeedMode,
    });
  });
});

document.getElementById("fontSelector").addEventListener("change", (e) => {
  const fontChoice = e.target.value;
  let fontFunction;
  switch (fontChoice) {
    case "poppins":
      fontFunction = applyPoppinsFont;
      break;
    case "roboto":
      fontFunction = applyRobotoFont;
      break;
    case "opensans":
      fontFunction = applyOpenSansFont;
      break;
    case "montserrat":
      fontFunction = applyMontserratFont;
      break;
    case "lato":
      fontFunction = applyLatoFont;
      break;
    case "merriweather":
      fontFunction = applyMerriweatherFont;
      break;
    case "lexend":
      fontFunction = applyLexendFont;
      break;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: fontFunction,
    });
  });
});

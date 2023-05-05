// --------------- Speed Mode --------------------
const enableSpeedMode = () => {
  // Function to bolden selected number of letters in a word
  const formatWord = (word, centerCharacter) => {
    const primaryLetters = word.substring(0, centerCharacter);
    const secondaryLetters = word.substring(centerCharacter, word.length);
    return `<b>${primaryLetters}</b>${secondaryLetters}`;
  };

  // Get all paragraphs in a web page
  const paragraphs = document.getElementsByTagName("p");

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i].textContent;

    // Get words in a paragraph while considering multiple white spaces
    const words = paragraph.split(/[ \t]+/);

    // Apply bold formatting based on word length
    const formattedWords = words
      .map((word) => {
        if (word.length <= 2) {
          return word;
        } else if (word.length <= 4) {
          return formatWord(word, 2);
        } else if (word.length <= 9) {
          return formatWord(word, 3);
        } else {
          return formatWord(word, 4);
        }
      })
      .join(" ");

    // Update the DOM
    paragraphs[i].innerHTML = formattedWords;
  }
};

// --------------- Font Functions --------------------
// @Poppins
const applyPoppinsFont = () => {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins");
  document.head.appendChild(link);

  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Poppins";
  }
};

// @Roboto
const applyRobotoFont = () => {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Roboto");
  document.head.appendChild(link);

  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Roboto";
  }
};

// @OpenSans
const applyOpenSansFont = () => {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Open+Sans"
  );
  document.head.appendChild(link);

  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Open Sans";
  }
};

// @Montserrat
const applyMontserratFont = () => {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Montserrat"
  );
  document.head.appendChild(link);

  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Montserrat";
  }
};

// @Lato
const applyLatoFont = () => {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Lato");
  document.head.appendChild(link);

  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Lato";
  }
};

// @Merriweather
const applyMerriweatherFont = () => {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Merriweather"
  );
  document.head.appendChild(link);

  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Merriweather";
  }
};

// @Lexend
const applyLexendFont = () => {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Lexend");
  document.head.appendChild(link);

  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Lexend";
  }
};

// --------------- Color Functions --------------------
// @Slate
const applySlateColor = () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#1e293b";
  }
};

// @Gray
const applyGrayColor = () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#374151";
  }
};

// @Zinc
const applyZincColor = () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#27272a";
  }
};

// @Stone
const applyStoneColor = () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#3f3f46";
  }
};

// @Neutral
const applyNeutralColor = () => {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "#404040";
  }
};

// --------------- Extension Script Execution Code----------

// Enable Speed Mode
document.getElementById("btnEnableSpeedMode").addEventListener("click", () => {
  document.getElementById("appStatus").style.color = "#166534";
  document.getElementById("appStatus").innerHTML = "On";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: enableSpeedMode,
    });
  });
});

// Enable Speed Fonts
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

// Enable Speed Colors
document.getElementById("colorSelector").addEventListener("change", (e) => {
  const colorChoice = e.target.value;
  let colorFunction;
  switch (colorChoice) {
    case "slate":
      colorFunction = applySlateColor;
      break;
    case "gray":
      colorFunction = applyGrayColor;
      break;
    case "zinc":
      colorFunction = applyZincColor;
      break;
    case "stone":
      colorFunction = applyStoneColor;
      break;
    case "neutral":
      colorFunction = applyNeutralColor;
      break;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: colorFunction,
    });
  });
});

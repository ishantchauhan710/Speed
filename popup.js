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
};

// Font functions

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

function enableSpeedMode() {
  //const title = document.title;
  //alert(title);
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
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

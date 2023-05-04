document.getElementById("test").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.scripting
      .executeScript({
        target: { tabId: tab.id },
        files: ["contentScript.js"],
      })
      .then(() => console.log("Injected a function!"));
  });
});

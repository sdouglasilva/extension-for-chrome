const trocarFundo = document.querySelector("#trocarcordefundo");

const fundoTrocado = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
};

trocarFundo.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fundoTrocado,
    args: [],
  });
});

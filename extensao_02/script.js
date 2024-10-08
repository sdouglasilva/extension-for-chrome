const form = document.querySelector("form");
const input = document.querySelector("#insira_url");

const trocarImagens = (imgUrl) => {
  const imagens = document.querySelectorAll("img");
  imagens.forEach((imagem) => (imagem.src = imgUrl));
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  alert("tá rolandoooo");
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: trocarImagens,
    args: [input.value],
  });
});

//Pegando pelo seletor de query
const form = document.querySelector("form");
//pegando pelo seletor de query
const input = document.querySelector(".input");
//criando a função mudar imagem:
// mudar imagem recebe uma arrow function que recebe a variável imagem
const trocarImagens = (url) => {
  // document.body.style.background = "red"; <- utiliza-se para testar o ambiente.
  //a variável imagem, recebe a tag
  const images = document.querySelectorAll("img");
  //para cada imagem, vamos alterar imagem passada na url capturada
  images.forEach((image) => (image.src = url));
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  alert("Está funcionando");
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: trocarImagens,
    args: [input.value],
  });
});
// chrome.tabs: Este é um objeto da API do Chrome que permite interagir com as abas (tabs) do navegador. Através dele, você pode criar, modificar, mover e obter informações sobre as abas abertas no navegador.

// .query({}): query() é um método da API chrome.tabs que é usado para consultar as abas abertas no navegador com base em critérios específicos. Neste caso, {} é um objeto vazio passado como argumento para query(), o que significa que estamos solicitando informações de todas as abas abertas no navegador atual.

const botao = document.querySelector("#gerar-senha");

function gerarSenha(comprimento) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let senha = "";
  for (let i = 0; i < comprimento; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[randomIndex];
  }
  return senha;
}

function gerarEShowSenha() {
  const comprimentoDaSenha = document.getElementById("comprimento").value;
  const senhaGerada = gerarSenha(comprimentoDaSenha);
  document.getElementById("senha").innerText = "Senha gerada: " + senhaGerada;
}

botao.addEventListener("click", gerarEShowSenha);

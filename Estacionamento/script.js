function fazerCadastro() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const placa = document.getElementById("placa").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  const usuario = { nome, email, senha, placa };

  localStorage.setItem("usuario", JSON.stringify(usuario));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "index.html";
}

function fazerLogin() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if (email === usuario.email && senha === usuario.senha) {
    alert("Login realizado!");
    // redirecionar para dashboard
  } else {
    alert("Email ou senha incorretos!");
  }
}

function footerText() {
  const footer = document.getElementById("texto-footer");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Copyright: Sistema de Estacionamento - @sistemaestacionamentojp@gmail.com`;
}
footerText();

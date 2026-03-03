function alternarFormulario(tela) {
    const formLogin = document.getElementById('formLogin');
    const formCadastro = document.getElementById('formCadastro');

    if (tela === 'cadastro') {
        formLogin.style.display = 'none';
        formCadastro.style.display = 'block';
    } else {
        formLogin.style.display = 'block';
        formCadastro.style.display = 'none';
    }
}

function entrar() {
    window.location.href = "perfil.html"; 
}

function cadastrar() {
    alert("Conta criada com sucesso! Redirecionando para o perfil...");
    window.location.href = "perfil.html";
}

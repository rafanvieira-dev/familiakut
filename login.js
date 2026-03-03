// Alterna entre a tela de Login e a tela de Cadastro
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

// Simula o login e redireciona para a página de perfil
function entrar() {
    // Quando tivermos o Firebase, a validação de email e senha entra aqui!
    // Por enquanto, apenas redirecionamos para o perfil estático:
    window.location.href = "perfil.html"; 
}

// Simula o cadastro e redireciona
function cadastrar() {
    alert("Conta criada com sucesso! Redirecionando para o perfil...");
    window.location.href = "perfil.html";
}

// --- 0. EDITAR PERFIL ---
function editarPerfil() {
    let nomeAtual = document.getElementById('nomeUsuario').innerText;
    let novoNome = prompt("Qual o seu nome?", nomeAtual);
    if(novoNome) document.getElementById('nomeUsuario').innerText = novoNome;

    let fas = prompt("Quantos fãs você tem?", document.getElementById('statFas').innerText);
    if(fas) document.getElementById('statFas').innerText = fas;

    let confiavel = prompt("Qual a sua % de Confiável?", document.getElementById('statConfiavel').innerText);
    if(confiavel) document.getElementById('statConfiavel').innerText = confiavel;

    let legal = prompt("Qual a sua % de Legal?", document.getElementById('statLegal').innerText);
    if(legal) document.getElementById('statLegal').innerText = legal;
    
    let sexy = prompt("Qual a sua % de Sexy?", document.getElementById('statSexy').innerText);
    if(sexy) document.getElementById('statSexy').innerText = sexy;
}

// --- 1. MUDAR FOTO DE PERFIL ---
document.getElementById('profileInput').addEventListener('change', function(event) {
    const arquivo = event.target.files[0];
    if (arquivo) {
        document.getElementById('profileImage').src = URL.createObjectURL(arquivo);
    }
});

// --- 2. POSTAR RECADO (COM FOTO, CURTIR E COMENTAR) ---
function postarRecado() {
    const textarea = document.getElementById('scrapText');
    const texto = textarea.value;
    const inputImagem = document.getElementById('scrapImage');
    const arquivo = inputImagem.files[0];

    if(texto.trim() === '' && !arquivo) {
        alert('Escreva algo ou escolha uma foto!');
        return;
    }

    const novoRecado = document.createElement('div');
    novoRecado.className = 'scrap-item';
    
    let conteudoHTML = `<strong>Você:</strong>`;
    
    if (texto.trim() !== '') conteudoHTML += `<p>${texto}</p>`;
    if (arquivo) conteudoHTML += `<img src="${URL.createObjectURL(arquivo)}" class="scrap-photo">`;

    conteudoHTML += `
        <div class="interacoes">
            <button class="btn-acao" onclick="curtir(this)">👍 Curtir (<span class="contador">0</span>)</button>
            <button class="btn-acao" onclick="toggleComentarios(this)">💬 Comentar</button>
        </div>
        <div class="area-comentarios">
            <div class="lista-comentarios"></div>
            <div class="comentario-form">
                <input type="text" placeholder="Escreva um comentário...">
                <button class="btn-acao" onclick="adicionarComentario(this)">Enviar</button>
            </div>
        </div>
    `;

    novoRecado.innerHTML = conteudoHTML;
    document.getElementById('scrapBoard').prepend(novoRecado);

    textarea.value = '';
    inputImagem.value = '';
}

// --- 3. LÓGICA DE CURTIR ---
function curtir(botao) {
    let spanContador = botao.querySelector('.contador');
    let likesAtuais = parseInt(spanContador.innerText);
    spanContador.innerText = likesAtuais + 1;
    botao.style.color = '#3b5998'; 
}

// --- 4. ABRIR/FECHAR COMENTÁRIOS ---
function toggleComentarios(botao) {
    let scrapItem = botao.closest('.scrap-item');
    let areaComentarios = scrapItem.querySelector('.area-comentarios');
    areaComentarios.style.display = (areaComentarios.style.display === 'block') ? 'none' : 'block';
}

// --- 5. ADICIONAR COMENTÁRIO ---
function adicionarComentario(botao) {
    let form = botao.closest('.comentario-form');
    let input = form.querySelector('input');
    let texto = input.value;

    if (texto.trim() === '') return;

    let lista = form.closest('.area-comentarios').querySelector('.lista-comentarios');
    let novoComentario = document.createElement('div');
    novoComentario.className = 'comentario-item';
    novoComentario.innerHTML = `<strong>Você:</strong> ${texto}`;

    lista.appendChild(novoComentario);
    input.value = '';
}

// --- 6. CRIAR COMUNIDADE ---
function criarComunidade() {
    let input = document.getElementById('nomeComunidade');
    let nome = input.value;
    
    if(nome.trim() === '') return;

    let grid = document.getElementById('gridComunidades');
    let novaComunidade = document.createElement('div');
    novaComunidade.className = 'grid-item';
    
    let idAleatorio = Math.floor(Math.random() * 1000);
    novaComunidade.innerHTML = `<img src="https://picsum.photos/50?random=${idAleatorio}"><br>${nome}`;

    grid.prepend(novaComunidade);
    input.value = '';

    let contador = document.getElementById('countComunidades');
    contador.innerText = parseInt(contador.innerText) + 1;
}

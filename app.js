// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim(); // Captura o valor inserido

    // Valida se o campo não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Valida se o nome contém números ou caracteres especiais
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!regex.test(nome)) {
        alert('O nome deve conter apenas letras e espaços.');
        return;
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';

    // Atualiza a lista de amigos na tela
    atualizarListaDeAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaDeAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista antes de adicionar os novos amigos
    listaAmigos.innerHTML = '';

    // Adiciona cada amigo na lista HTML
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há pelo menos 2 amigos na lista
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return;
    }

    // Gera um índice aleatório para o sorteio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<strong>Amigo sorteado:</strong> ${amigoSorteado}`;
}
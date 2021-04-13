
const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
promessa.then(pegaOsFilmesDoServidor);

function pegaOsFilmesDoServidor (resposta){
    renderizarFilmes(resposta.data);
}

function renderizarFilmes (filmes){
    const listaDefilmes = document.querySelector(".movies");
    listaDefilmes.innerHTML="";

    for(let i=0; i<filmes.length ; i++){
    listaDefilmes.innerHTML += `
        <div class="movie">
            <img src="${filmes[i].imagem}">
            <div class="title">${filmes[i].titulo}</div>
            <button onclick="comprar(this, ${filmes[i].id})">
            Comprar
            <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
    `}
}

function comprar(dados, id){

    const nome = prompt("Qual é o seu nome?");
    const assentos = parseInt(prompt("Qual é a quantidade de assentos?"));

    const enviarParaServidor = {nome: nome, quantidade: assentos}
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id}/ingresso`

    const promessa = axios.post(url, enviarParaServidor);

    promessa.then(sucesso);
    promessa.catch(falhou);
}

function sucesso(){
    alert("Ingresso comprado com sucesso!");
}

function falhou (){
    alert("Os ingressos para este filme estão esgotados!");
}
let nomes_heroi = [
    {nome: "Astra Nova", xp: 1000},
    {nome: "Titanus", xp: 2000},
    {nome: "Sombra Veloz", xp: 5000},
    {nome: "Luz Radiante", xp: 7000},
    {nome: "Cavaleiro Celestial", xp: 8000},
    {nome: "Tempestade de Fogo", xp: 9000},
    {nome: "Guardião das Estrelas", xp: 10000},
    {nome: "Falcão de Ferro", xp: 11000},
]

let index = 0;

while (index < nomes_heroi.length) {
    var hero = nomes_heroi[index];
    let nivel;

    if (hero.xp < 1000) nivel = "Ferro";
    else if (hero.xp <= 2000) nivel = "Bronze";
    else if (hero.xp <= 5000) nivel = "Prata";
    else if (hero.xp <= 7000) nivel = "Ouro";
    else if (hero.xp <= 8000) nivel = "Platina";
    else if (hero.xp <= 9000) nivel = "Ascendente";
    else if (hero.xp <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    console.log(`O Herói de nome **${hero.nome}** está no nível de **${nivel}**`);
    
    index++;
}
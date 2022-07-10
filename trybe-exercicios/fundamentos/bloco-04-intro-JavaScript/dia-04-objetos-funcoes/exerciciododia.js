/*
let info ={
    personagem: 'margarida',
    origem: 'Pato Donald',
    nota: "Namorada do personagem principal nos quadrinhos do pato Donald",
    recorrente: 'sim',
};
console.log("Bem Vinda",info.personagem)
console.log(info.recorrente) 


for (let mic in info){
    console.log(mic)
    
}

for (let pat in info){
    console.log(info[pat])
}

let info ={
    personagem: 'tio patinha',
    origem: 'christmas on Bear Mountain',
    nota: "Dell's Four Color Comics #178"
}
*/
// to de boa de fazer esse anterior ai kkk


let leitor =  {
    nome:'julia',
    sobrenome:'pessoa',
    idade:21,
    livrosFavoritos: [
        {
            titulo: 'O Pior dia de todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas'
        },
        {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editora: 'Rocco',
          }
    ],
};
console.log("O livro favorito de",leitor.nome,leitor.sobrenome,"se chama", leitor.livrosFavoritos[0].titulo);
console.log(leitor.nome, "tem",leitor.livrosFavoritos.length," livros favoritos")


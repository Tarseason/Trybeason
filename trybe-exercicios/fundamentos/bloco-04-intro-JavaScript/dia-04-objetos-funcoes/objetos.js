/*
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas']
};

console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' Possui '+ singer.age + ' anos') 

console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + 'anos' )

singer['fullName'] = singer.name + ' ' + singer.lastName;
console.log('Nome completo' + fullName)
*/
/*
let car ={
    type: 'fiat',
    model: '500',
    color: 'white',
}
console.log(car['type'], car['model'], car.color)
*/
/*
let diasDaSemana={
    1: 'domingo',
    2: 'segunda',
    3: 'terca',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sabado',
};console.log(diasDaSemana['1'])
*/

/*
let conta = {
    agencia:'0000',
    banco:{
        cod:'012',
        id: 4,
        nome: 'Trybank',
    },
};
let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]);

console.log(conta.agencia);
console.log(conta['agencia']);

console.log(conta.banco.cod)
console.log(conta['banco']['id'])
*/

/*
let usuario ={
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal:{
        nome:'Jake',
        sobrenome: 'Peralta',
        endereco:{
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        }
    }
}
console.log(usuario['id']);
console.log(usuario.email);
console.log(usuario.infoPessoal.endereco.rua);
console.log(usuario['infoPessoal']['endereco']['cidade']); */


let moradores =[
{
    nome: 'Luiza',
    sobrenome: 'Guimaraes',
    andar: 10,
    apartamento: 1005,

},
{
    nome: 'Wiliam' ,
    sobrenome: 'Albuquerque',
    andar: '5',
    apartamento: '502',
},
{
    nome: 'Murilo' ,
    sobrenome: 'Couto',
    andar: '6',
    apartamento: '1698',
},{
    nome: 'Zoe' ,
    sobrenome: 'Brooks',
    andar: '1',
    apartamento: '1',
},
];
let primeiroMorador = moradores [0]
console.log(primeiroMorador);
console.log(primeiroMorador['andar']);

let ultimoMorador = moradores[moradores.length-1]
console.log(ultimoMorador);
console.log(ultimoMorador.nome);


/*
let player = {
    name: 'marta',
    lastName: 'silva',
    age: 34,
    medals: {
        golden : 2,
        silver: 3,
    },
    bestInTheWorld: [
        2006,
        2007,    
        2008,
        2009,
        2010,
        2018,
    ],
}
console.log("A jogadora",player.name, player.lastName,"tem", player.age,'anos de idade!')
console.log("A jogadora", player.name,player.lastName,'foi eleita a melhor do mundo', player.bestInTheWorld.length, 'vezes');
console.log("a Jogadora",player.name, player.lastName,"possui",player.medals.golden,"Medalhas de ouro e", player.medals.silver,"de prata")
*/
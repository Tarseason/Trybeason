/*
let nome ='joao'
console.log('bom dia', nome)

function bomDiaTryber(nome) {
    console.log(nome)
    
} bomDiaTryber('Julia');
    bomDiaTryber('Marcelo')
    bomDiaTryber('Tarseason')
    */

/*
let status ='deslogado';

function logarDeslogar(){
    if (status === 'deslogado'){
        status = 'logado'
    } else {
        status = 'deslogado'
    }
} console.log(status)

logarDeslogar();
console.log(status);

logarDeslogar();
console.log(status)

console.log('O usuario esta',status);
*/

/*
function soma(a,b){
    return a+b;
}
console.log(soma(7,2));
*/


function maiorNum(primeiroNum, segundoNum){
    if (primeiroNum > segundoNum){
        return primeiroNum+' é maior que '+segundoNum;
    }else if (primeiroNum < segundoNum){
        return segundoNum+" é maior que "+ primeiroNum;
    } else {
        return 'Os numeros tem o mesmo valor'
    }
}
console.log(maiorNum(10,20));
console.log(maiorNum(2, -5));
console.log(maiorNum(1,1));
/*
let pizzas = ["4 queijos", 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
let indexOfTask = pizzas.indexOf ('Chocolate')

console.log(indexOfTask)
*/
/*
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 for(index =0; index < number.length; index ++){
    console.log(number[index])
 } */


/*
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (index = 0; index < number.length; index++){
    soma = soma + number[index]
}
console.log(soma) */

/*
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media=0;
for (index = 0; index < number.length; index++){
    soma = soma + number[index];
    media = soma/number.length;
} 
console.log(soma);
console.log(media);  */

/*
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let media=0;
for (index = 0; index < number.length; index++){
    soma = soma + number[index];
    media = soma/number.length;
} 
console.log(soma);
console.log(media); 
if (media > 20) {
    console.log("Valor maior que 20");
} else{
    console.log("Valor Menor ou igual a 20")
} */

/*
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let maiorn=0;
for (index = 0; index < number.length; index++){
    if(maiorn < number[index]){
        maiorn = number[index]
    }    
} console.log(maiorn); */

/*
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma=0;
let npar=0;  (-4) 
let nimpar= 0;  (-6) 
for (index = 0; index < number.length; index++){
    if (number[index]%2 === 0) { 
        npar = npar+ 1;
    } else {
        nimpar = nimpar + 1
    }
}
console.log(nimpar)
console.log(npar)

    if(nimpar > 0 && npar > 0){
        console.log("Quantidade de Numeros impar: ", nimpar);
        console.log("Quantidade de numeros pares: ", npar);
    } else if (nimpar <= 0 && npar <= 0) {
        console.log("Nao ha numeros pares nem impares.");
    } */

   
   
    /*
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mnum = 0 ;

 for(index=1; index < number.length; index ++ ){
    if (mnum <= number[index]) {
        mnum = number[index]
    }
    
} console.log(mnum)
  */


let menu = [ 'home', 'servicos', 'portifolio', 'links']
let menuServices = menu[1] ;

    console.log(menuServices)



/*
let menu = ['home', 'servicos','portifolio', 'links'];
let indexOfPortifolio = menu[2] ;

 console.log(indexOfPortifolio);
*/
/*
let menu = ['home', 'servicos', 'portifolio','links']
menu.push('contato');
console.log(menu);
*/

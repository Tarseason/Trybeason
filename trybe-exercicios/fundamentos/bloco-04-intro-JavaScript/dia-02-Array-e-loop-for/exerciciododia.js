/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (num of numbers) {
    console.log(num)
} */
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma =0 ;
for (index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index];
} console.log(soma) 
*/

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
for (index =0; index<numbers.length;index++){
    soma = soma + numbers[index]
} media = soma/numbers.length
console.log('a media é', media)
if (media > 20){
    console.log("A media é maior que 20")
} else {
    console.log("A media é igual ou menor que 20")
}
*/

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorn = 100;
for (index = 0; index< numbers.length; index ++){
    if (maiorn < numbers[index]){
        maiorn = numbers[index];
    } 
}console.log(maiorn)
*/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numi = 0;
for (index =0; index< numbers.length; index ++){
    if(numbers[index]%2!==0){
        numi = numi + 1
    } else if (numi === 0 ){
        console.log("Nenhum numero impar encontrado")
    }
}console.log(numi)
*/

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorn = 100;
for (index = 0; index<numbers.length;index++){
    if(menorn>numbers[index]){
        menorn= numbers[index]
    }
}console.log(menorn)
*/
let resdiv ;
for (index =0; index <=25; index ++){
    resdiv = index / 2;
    console.log(index+ "/2 = " ,resdiv)
}


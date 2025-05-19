const idades = [17, 21, 16, 25, 19]; 
let maiorIdade = 0; 
let menorIdade = 0; 

// Laço de repetição para varrer todos os elementos do meu array idades
for (let i = 0; i < idades.length; i++) {
    // Condição para contadores maior e menor de idade
    if (idades[i] >= 18) {      
        maiorIdade++;
    } else {
        menorIdade++;      
    }
    
}

console.log(`Tem ${maiorIdade} pessoas maior de idade`);
console.log(`Tem ${menorIdade} pessoas menor de idade`);



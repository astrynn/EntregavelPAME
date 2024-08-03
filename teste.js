var input = require('readline-sync');
while (true) {
    let novoEstoque = input.question('Digite a Nova Quantidade: ')
    try {
        if (isNaN(novoEstoque)) {
        throw new Error();
        }

    } catch(erro) {
        console.log('Digite apenas numeros')
        continue
    }
    if (parseInt(novoEstoque) < 0) {
        console.log('Digite um numero maior ou igual a 0')
    }
    break
}
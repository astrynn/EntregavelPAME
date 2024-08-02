var input = require('readline-sync')
var example = input.question('fala')

class Sistema {
    constructor() {
    }
    
    cadastrar() {

        console.log('Como voce deseja se cadastrar?\n')
        console.log('1 - Funcionario')
        console.log('2 - Cliente\n')
        var respostaCadastro = input.question('Digite a resposta: ')


    }
}

a = new Sistema()

console.log(a.cadastrar())


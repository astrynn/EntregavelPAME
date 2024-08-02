var input = require('readline-sync')

class Pedido {
    constructor(idUnico,idCliente,status,dataPedido) {

        this.idUnico = idUnico;
        this.idCliente = idCliente;
        this.status = status;
        this.dataPedido = dataPedido;

    }
    

}

class Funcionario {
    constructor(idUnico,nomeUsuario,cpf,email,senha) {

        this.idUnico = idUnico;
        this.nomeUsuario = nomeUsuario;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

}

class Cliente {
    constructor(idUnico,nome,dataNascimento,cpf,email,senha) {

        this.idUnico = idUnico;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;

    }

}

class Produto {
    constructor(idUnico,nome,dataNascimento,cpf,email,senha) {
        
        this.idUnico = idUnico;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

}

class Sistema {
    constructor() {

        this.listaClientes = [];
        this.listaFuncionarios = [];
        this.listaProdutos = [];

    }

    cadastrar() {

        while (true) {

            console.log('Como voce deseja se cadastrar?\n')
            console.log('1 - Funcionario')
            console.log('2 - Cliente')
            console.log('3 - Voltar ao menu principal.\n')
            let escolha = input.question('Digite a opcao: ');
            console.log()
        
            if (escolha != '1' && escolha != '2' && escolha != '3') {
        
                console.log('Digite uma opcao valida.\n')
                continue
            }
            
            if (escolha == '1') {
        
                console.log('-------------- Cadastrar como Funcionario --------------\n')
            
            }
        
            if (escolha == '2') {
        
                console.log('-------------- Cadastrar como Cliente --------------\n')
                let idUnico = input.question('Digite o id Unico')
                this.listaClientes.push(Cliente(idUnico,data))

            }

            if (escolha == '3') {
                break
            }
        }

    }
}

var iniciarSistema = new Sistema()

while (true) {

    console.log('Escolha uma das opcoes: \n')
    console.log('1 - Fazer Login')
    console.log('2 - Fazer Cadastro')
    console.log('3 - Sair do Programa\n')
    let escolha = input.question('Digite a opcao desejada: ');
    console.log()

    if (escolha != '1' && escolha != '2' && escolha != '3') {

        console.log('Digite uma opcao valida.\n')
        continue
    }

    if (escolha == '1') {

        console.log('-------------- Fazer Login --------------\n')

    }
    
    if (escolha == '2') {

        console.log('-------------- Fazer Cadastro --------------\n')
        console.log(iniciarSistema.cadastrar())
    }

    if (escolha == '3') {

        console.log('Programa encerrado.\n')
        break
    }
}



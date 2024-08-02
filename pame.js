var input = require('readline-sync')

//declarando listas, para armazenar os dados referentes aos clientes, funcionarios e produtos
var listaClientes = [];
var listaFuncionarios = [];
var listaProdutos = [];
var listaPedidos = []
//declarando variaveis para o id, para que mais a frente possa se fazer a contagem dos id's e cada um ser !=
var idUnicoFunc = 0;
var idUnicoCliente = 0;
var idUnicoPedido = 0;

//criando a classe pedido
class Pedido {
    constructor(idUnico,idCliente,status,dataPedido) {
        //atributos da classe pedido
        this.idUnico = idUnico;
        this.idCliente = idCliente;
        this.status = status;
        this.dataPedido = dataPedido
    }
}
//criando a classe funcionario-
class Funcionario {
    constructor(idUnico,nomeUsuario,cpf,email,senha) {
        //atributos da classe funcionario
        this.idUnico = idUnico;
        this.nomeUsuario = nomeUsuario;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}
//criando a classe cliente
class Cliente {
    constructor(idUnico,nome,dataNascimento,cpf,email,senha) {
        //atributos da classe cliente
        this.idUnico = idUnico;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}
//criando a classe produto
class Produto {
    constructor(validade,preco,qtdEstoque,nome,descricao) {
        //atributos da classe produto
        this.validade = validade;
        this.nome = nome;
        this.qtdEstoque = qtdEstoque;
        this.preco = preco;
        this.descricao = descricao;
    }
}
//criando a classe sistema, que sera a classe principal do codigo, onde estara todos os metodos a serem utilizados
class Sistema {
    constructor() {
    }
    //criando o metodo para o usuario fazer login
    fazerLogin() {
        //loop para manter o usuario no menu ate que ele digite uma opcao correta
        while (true) {
            console.log('Fazer login como:\n');
            console.log('1 - Funcionario');
            console.log('2 - Cliente');
            console.log('3 - Voltar ao menu principal\n')
            let escolha = input.question('Digite a opcao desejada: ')
            if (escolha != '1' && escolha != '2' && escolha != '3') {
                console.log('Opcao invalida, digite novamente\n');
                continue
            //este if garante que o usuario so consiga prosseguir se digitar a opcao correta
            }
            if (escolha == '3') {
                break
            }
            //parte do codigo para o login do funcionario
            if (escolha == '1') {
                console.log('Voce escolheu fazer login como funcionario!\n')
                var confirmacaoLoginFuncionarioEmail = false
                //while para a verificacao se o email esta cadastrado
                while (confirmacaoLoginFuncionarioEmail == false){
                    let email = input.question('Digite o email de login: ');
                    console.log();
                    //percorrendo a lista de funcionarios para ver se o email esta cadastrado
                    for (let i = 0; i < listaFuncionarios.length; i++){
                        //se sim, entra neste if, se nao, nao entra no if ate que encontre
                        if (listaFuncionarios[i].email == email) {
                            //while para a verificacao da senha
                            var confirmacaoLoginFuncionarioSenha = false;
                            while (confirmacaoLoginFuncionarioSenha == false) {
                                let senha = input.question('Digite sua senha: ');
                                //se a senha estiver correta, entra no if
                                if (listaFuncionarios[i].senha == senha) {
                                    //o funcionario consegue logar e entao o metodo funcionarioLogado() eh chamado para que ele possa mexer em sua conta
                                    console.log('Login completado com sucesso!');
                                    let conta = new Sistema();
                                    console.log(conta.funcionarioLogado());
                                }
                                //se nao entrar no if de cima, entra no else e o loop continua
                                else {
                                    console.log('Senha incorreta, digite novamente');
                                    continue
                                }
                                confirmacaoLoginFuncionarioSenha = true; 
                            }
                            confirmacaoLoginFuncionarioEmail = true;
                        } 
                    }
                    if (confirmacaoLoginFuncionarioEmail == false) {
                        console.log('Email nao encontrado, digite novamente\n')
                    //loop continua ate que o usuario digite um email cadastrado
                    }
                }
            } 
            ////parte do codigo para o login do cliente
            //mesma linha de raciocionio para a parte do codigo do login do funcionario
            if (escolha == '2') {
                //while para a verificacao se o email esta cadastrado
                console.log(listaClientes);
                console.log('Voce escolheu fazer login como cliente!\n')
                var confirmacaoLoginClienteEmail = false
                while (confirmacaoLoginClienteEmail == false){
                    let email = input.question('Digite o email de login: ');
                    console.log();
                    //percorrendo a lista de cliente para ver se o email esta cadastrado
                    for (let i = 0; i < listaClientes.length; i++){
                        //se sim, entra neste if 
                        if (listaClientes[i].email == email) {
                            //while para a verificacao da senha
                            var confirmacaoLoginClienteSenha = false;
                            while (confirmacaoLoginClienteSenha == false) {
                                let senha = input.question('Digite sua senha: ');
                                //se a senha estiver correta, entra no if
                                if (listaClientes[i].senha == senha) {
                                    //o cliente consegue logar e entao o metodo clienteLogado() eh chamado para que ele possa mexer em sua conta
                                    console.log('Login completado com sucesso!');
                                    let conta = new Sistema();
                                    console.log(conta.clienteLogado());
                                }
                                //se nao entrar no if de cima, entra no else e o loop continua
                                else {
                                    console.log('Senha incorreta, digite novamente');
                                    continue
                                }
                                confirmacaoLoginClienteSenha = true; 
                            }
                            confirmacaoLoginClienteEmail = true;
                        }    
                    }
                    if (confirmacaoLoginClienteEmail == false) {
                        console.log('Email nao encontrado, digite novamente\n')
                    }
                }
            } 
            break //break para finalizar o primeiro loop
        } 
    }
    //metodo para tanto o cliente quanto o funcionario verem seus dados
    verDadosFunc() {

        console.log(`ID: ${id} \nNome: \nCPF: \nEmail: \nSenha: \n`)

    }
    adicionarProduto() {
        let validade = input.question('Digite a data de validade (xx/xx/xxxx): ');
        let preco = input.question('Digite o preco: ');
        let qtdEstoque = input.question('Digite a quantidade no estoque: ');
        let nome = input.question('Digite o nome do produto: ');
        let descricao = input.question('Digite a descricao do produto: ');

        //armazenando os dadoas na listaProdutos, assim essa lista se torna uma lista de objetos do tipo produto
        listaProdutos.push(new Produto(validade, preco, qtdEstoque, nome, descricao));
        console.log('Produto adicionado com sucesso!\n');
    }
    //metodo para o funcionario poder mexer na sua conta (ver dados, modificar dados,ver lista de pedidos, etc)
    funcionarioLogado() {
        //loop para manter o usuario no menu ate que ele digite uma opcao correta
        while (true){
            console.log('-------------- Sua conta (Funcionario) --------------\n');
            console.log('O que voce gostaria de fazer:\n');
            console.log('1 - Ver Meus Dados');
            console.log('2 - Modificar Meus Dados');
            console.log('3 - Ver Lista de Pedidos');
            console.log('4 - Ver Lista de Produtos');
            console.log('5 - Ver Lista de Clientes');
            console.log('6 - Mudar Status do Pedido');
            console.log('7 - Adicionar Produto');
            console.log('8 - Editar Produto');
            console.log('9 - Excluir Produto');
            console.log('10 - Sair da conta\n');
            let escolha = input.question('Digite uma opcao: ');
            if (escolha != '1' && escolha != '2' && escolha != '3' && escolha != '4' && escolha != '5' && escolha != '6' && escolha != '7' && escolha != '8' && escolha != '9' && escolha != '10') {
                console.log('Digite uma opcao valida.\n');
                continue//se entrar no if, o continue faz voltar ao menu
            }
            if (escolha == '1') {
                console.log('-------------- Seus Dados --------------\n');
                let dadosFuncionario = new Sistema();
                console.log(dadosFuncionario.verDadosFunc());
                continue
            }
            if (escolha == '2') {
                console.log('-------------- Modificar Dados --------------\n');
                let modificarFuncionario = new Sistema();
                console.log(modificarFuncionario.modificarDadosFunc());
                continue
            }
            if (escolha == '3') {
                console.log('-------------- Lista de Pedidos --------------\n');
                let verPedidos = new Sistema();
                console.log(verPedidos.verListaPedidos());
                continue
            }
            if (escolha == '4') {
                console.log('-------------- Lista de Produtos --------------\n');
                let verProdutos = new Sistema();
                console.log(verProdutos.verListaProdutos());
                continue
            }
            if (escolha == '5') {
                console.log('-------------- Lista de Clientes --------------\n');
                let verClientes = new Sistema();
                console.log(verProdutos.verListaClientes());
                continue
            }
            if (escolha == '6') {
                console.log('-------------- Alterar Status do Pedido --------------\n');
                let statusPedido = new Sistema();
                console.log(statusPedido.modificarStatusPedido());
                continue
            }
            if (escolha == '7') {
                console.log('-------------- Adicionar Produto --------------\n');
                let novoProduto = new Sistema();
                console.log(novoProduto.adicionarProduto());
                continue
            }
            if (escolha == '8') {
                console.log('-------------- Alterar Produto --------------\n');
                let alterar = new Sistema();
                console.log(alterar.alterarProduto());
                continue
            }
            if (escolha == '9') {
                console.log('-------------- Excluir Produto --------------\n');
                let excluirProduto = new Sistema();
                console.log(excluirProduto.removerProduto());
                continue
            }
            if (escolha == '10') {
                console.log('Voce saiu da conta com sucesso!\n');
                break
            }
        }
    }
    //metodo para o cliente poder mexer na sua conta (ver dados, modificar dados,ver lista de pedidos, etc)
    clienteLogado() {
        //loop para manter o usuario no menu ate que ele digite uma opcao correta
        while (true){
            console.log('-------------- Sua conta (Cliente) --------------\n');
            console.log('O que voce gostaria de fazer:\n');
            console.log('1 - Ver Meus Dados');
            console.log('2 - Modificar Meus Dados');
            console.log('3 - Ver Lista de Produtos');
            console.log('4 - Fazer Pedido');
            console.log('5 - Cancelar Pedido');
            console.log('6 - Ver Meus Pedidos');
            console.log('7 - Avaliar Pedido');
            console.log('8 - Visualizar Avaliacoes');
            console.log('9 - Sair da conta\n');
            let escolha = input.question('Digite uma opcao: ');
            if (escolha != '1' && escolha != '2' && escolha != '3' && escolha != '4' && escolha != '5' && escolha != '6' && escolha != '7' && escolha != '8' && escolha != '9') {
                console.log('Digite uma opcao valida.\n');
                continue//se entrar no if, o continue faz voltar ao menu
            }
            if (escolha == '1') {
                console.log('-------------- Seus Dados --------------\n');
                let dadosCliente = new Sistema();
                console.log(dadosCliente.verDadosCliente());
                continue
            }
            if (escolha == '2') {
                console.log('-------------- Modificar Dados --------------\n');
                let modificarCliente = new Sistema();
                console.log(modificarCliente.modificarDadosCliente());
                continue
            }
            if (escolha == '3') {
                console.log('-------------- Lista de Produtos --------------\n');
                let verProdutos = new Sistema();
                console.log(verProdutos.verListaProdutos());
                continue
            }
            if (escolha == '4') {
                console.log('-------------- Fazer Pedido --------------\n');
                let pedido = new Sistema();
                console.log(pedido.fazerPedido());
                continue
            }
            if (escolha == '5') {
                console.log('-------------- Cancelar Pedido --------------\n');
                let cancelar = new Sistema();
                console.log(cancelar.cancelarPedido());
                continue
            }
            if (escolha == '6') {
                console.log('-------------- Lista de seus Pedidos --------------\n');
                let verPedidos = new Sistema();
                console.log(verPedidos.verPedidosCliente());
                continue
            }
            if (escolha == '7') {
                console.log('-------------- Avaliar Pedido --------------\n');
                let avaliar = new Sistema();
                console.log(avaliar.avaliarProduto());
                continue
            }
            if (escolha == '8') {
                console.log('-------------- Visualizar Avaliacoes --------------\n');
                let visualizar = new Sistema();
                console.log(visualizar.visualizarAvaliacao());
                continue
            }
            if (escolha == '9') {
                console.log('Voce saiu da conta com sucesso!\n');
                break
            }
        }
    }
    //metodo para o cadastro do usuario
    cadastrar() {
        //loop para manter o usuario no menu ate que ele digite uma opcao correta
        while (true) {
            console.log('Como voce deseja se cadastrar?\n');
            console.log('1 - Funcionario');
            console.log('2 - Cliente');
            console.log('3 - Voltar ao menu principal\n');
            let escolha = input.question('Digite a opcao: ');
            console.log();
            //este if garante que o usuario so consiga prosseguir se digitar a opcao correta
            if (escolha != '1' && escolha != '2' && escolha != '3') {
        
                console.log('Digite uma opcao valida.\n');
                continue //caso entre aqui o usuario volta para o menu pro conta do continue
            }
            //parte do codigo para o cadastro de funcionario
            if (escolha == '1') {
        
                console.log('-------------- Cadastrar como Funcionario --------------\n')
                
                //variaveis que armazenam as informacoes perguntadas ao usuario
                let nome = input.question('Digite o seu nome: ');
                let cpf = input.question('Digite o seu CPF: ');
                let email = input.question('Digite o seu email: ');
                let senha = input.question('Digite a sua senha: ');

                //armazenando os dadoas na listaFuncionario, assim essa lista se torna uma lista de objetos do tipo funcionario
                listaFuncionarios.push(new Funcionario(idUnicoFunc, nome, cpf, email, senha));
                idUnicoFunc++; // alterando o id para o proximo funcionario
                console.log('Cadastrado com sucesso!\n')
                console.log('Voce foi redirecionado ao menu principal')
                break // quebra o loop

            }
            //parte do codigo para o cadastro de cliente
            //mesma linha de raciocionio da parte do codigo de cadastro de funcionario
            if (escolha == '2') {
        
                console.log('-------------- Cadastrar como Cliente --------------\n');

                let nome = input.question('Digite o seu nome: ');
                let data = input.question('Digite a sua data de nascimento: ');
                let cpf = input.question('Digite o seu CPF: ');
                let email = input.question('Digite o seu email: ');
                let senha = input.question('Digite a sua senha: ');
                
                listaClientes.push(new Cliente(idUnicoCliente, nome, data, cpf, email, senha));
                idUnicoCliente++;
                console.log('Cadastrado com sucesso!\n')
                console.log('Voce foi redirecionado ao menu principal')
                break
            }
            if (escolha == '3') {
                break
            }
        }
    }
}
//atribuindo uma variavel a classe sistema
var iniciarSistema = new Sistema()
//codigo para o menu principal, aqui o usuario podera acessar todos os metodos ds classe sistema
//loop para garantir que o usuario digite uma opcao correta
while (true) {
    console.log('Escolha uma das opcoes: \n')
    console.log('1 - Fazer Login')
    console.log('2 - Fazer Cadastro')
    console.log('3 - Sair do Programa\n')
    let escolha = input.question('Digite a opcao desejada: ');
    console.log()

    if (escolha != '1' && escolha != '2' && escolha != '3') {

        console.log('Digite uma opcao valida.\n')
        continue//se entrar no if, o continue faz voltar ao menu
    }
    //parte do codigo para o usuario acessar o login
    if (escolha == '1') {

        console.log('-------------- Fazer Login --------------\n');
        let login = new Sistema();
        console.log(login.fazerLogin())
    }
    //parte do codigo para o usuario acessar o cadastro
    if (escolha == '2') {

        console.log('-------------- Fazer Cadastro --------------\n')
        console.log(iniciarSistema.cadastrar())
        continue
    }
    //parte do codigo para o usuario sair do programa
    if (escolha == '3') {

        console.log('Programa encerrado.\n')
        break //break encerra o loop
    }
}
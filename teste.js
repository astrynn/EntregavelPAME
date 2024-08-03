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
                                let IDFunc = listaFuncionarios[i].idUnico; //sabe-se qual funcionario esta logando pelo id
                                console.log(conta.funcionarioLogado(IDFunc));
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
        //parte do codigo para o login do cliente
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
                                let IDcliente = listaClientes[i].idUnico; //sabe-se qual cliente esta logando pelo id
                                console.log(conta.clienteLogado(IDcliente));
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
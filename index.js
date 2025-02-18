// Variavel que armazena o saldo inicial da conta
let saldo = 0

// funcao para atualizar o saldo na tela
function atualizarSaldo(){
    // Selecionar o elemento do saldo e atualiza o texto com o valor
    document.getElementById('saldo').textContent = saldo.toFixed(2)
}

// funcao que realiza deposito
function Depositar () {
    // Obtem o valor digitado pelo usuario e converte para numero decimal
    valor = parseFloat(document.getElementById('valor').value)
    // verifica se o valor é valido (maior que 0 e numerico)
    if (isNaN(valor) || valor <=0){
        //exibe alerta se o valor for valido
        alert("TA DOIDÃO MULEKE")
        return //interrompe a funcao
    }
    //adicionar valor ao saldo
    saldo += valor

    //atualizar o saldo na tela
    atualizarSaldo()

    //Exibir uma mensagem confirmando
    alert('Ta na mão chefe R$' + valor.toFixed(2) + '!')
}

//funcao do saque

function Sacar() {
    //obtem o valor e retira
    valor = parseFloat(document.getElementById('valor').value)

    // verifica se o valor é valido ()
    if (isNaN(valor) || valor <=0){
        //exibe alerta se o valor for valido
        alert("TA DOIDÃO MULEKE")
        return //interrompe a funcao
    }

    if (valor>saldo) {
        alert('valor muito alto')
        return
    }
    //adicionar valor ao saldo
    saldo -= valor

    //atualizar o saldo na tela
    atualizarSaldo()

        //Exibir uma mensagem confirmando
        alert('Ta na mão chefe R$' + valor.toFixed(2) + 'Saque realizado')
}
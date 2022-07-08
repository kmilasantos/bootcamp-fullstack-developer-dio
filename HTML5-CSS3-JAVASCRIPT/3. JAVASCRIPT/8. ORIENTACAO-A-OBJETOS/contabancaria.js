class contaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;
    }

    get getSaldo(){
        return this.saldo;
    }

    /**
     * @param {any} valor
     */
    set setSaldo(valor){
        this.saldo = valor;
    }

    sacar(valor){
        if (valor > this.saldo){
            return "Operação negada";
        }
        this.saldo = this.saldo - valor;

        return this.saldo;
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
        return this.saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = this.cartaoCredito;
    }

    get getCartaoCredito(){
        return this.cartaoCredito;
    }

    /**
     * @param {any} valor
     */
    set setCartaCredito(valor){
        this.cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada";
        }
        this.saldo = this.saldo - valor;
    }
}
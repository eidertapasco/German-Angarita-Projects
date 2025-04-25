//This: hace un llamado dentro del mismo objeto al valor que este llamando

const user = {
    name: 'Eider',
    lastName: 'Tapasco',
    age: 26,
    showFullName(){
        return this.name + ' ' + this.lastName
    }
}

console.log(user);
console.log(user.showFullName());

//pasarle parametros al metodo de un objeto

const account = {
    number: '1234567890',
    amount: 100,
    deposit(quantity){
        this.amount = this.amount + quantity;
    },
    withdram(quantity){
        this.amount = this.amount - quantity
    }
}

account.deposit(100);
account.deposit(50);
account.deposit(10);
console.log(account);

account.withdram(10);
account.withdram(200);
console.log(account);
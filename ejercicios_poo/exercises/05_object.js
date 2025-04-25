//Constructores en js: son funciones que nos permiten crear objetos con propiedades y metodos - es un generador de objetos

const user = {
    name: 'Eider',
    lastName: 'Tapasco',
    age: 26,
    showFullName(){
        return `${this.name} ${this.lastName}`
    }
}

//debe ir en mayuscula inicial para hacer referencia a que sera un constructor
//en otros lenguajes se les llama class definir que propiedades y metodos pertenecen a un objeto y apartir de esa clase generar objetos

function Person(){
    this.name = ''
    this.lastName = ''
    this.age = 0
    this.showFullName =  function () {
        return `${this.name} ${this.lastName}`
    }
}
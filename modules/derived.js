const Base = require("./base");

class Derived extends Base {
    constructor() {
        super()
        this.name = 'derived'
        this.age = 34
    }

    add(num){
        this.age+=num
    }
}



Derived.prototype.insert = function () {
    console.log('insert derived')
    console.log(this.name)
    console.log(this.age)
}

Derived.prototype.delete = function () {
    console.log('delete derived')
    console.log(this.name)
    console.log(this.age)
}

Derived.prototype.aaa=function(){
    console.log('aaa')
}

const derived = new Derived()


module.exports = { derived }
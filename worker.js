
const { parentPort, workerData } = require('worker_threads');
const { derived } = require('./modules/derived')
// console.log(parentPort, isMainThread)

// let {obj} = workerData
// let proto = Object.getPrototypeOf(derived)

// console.log(proto)
// Object.setPrototypeOf(obj,proto)
// console.log(obj)

parentPort.once('message', (obj) => {
    console.log({obj})
    let proto = Object.getPrototypeOf(derived)

    console.log({proto})
    Object.setPrototypeOf(obj.derived, proto)
    console.log(obj.derived)
    setTimeout(() => {
        console.log(obj.time)
        obj.derived.age += obj.time
        obj.derived.delete()

        parentPort.postMessage(obj.age);
    }, obj.time)


});
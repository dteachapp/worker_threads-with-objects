
const { parentPort, workerData } = require('worker_threads');
const { derived } = require('./modules/derived')
// console.log(parentPort, isMainThread)

let {obj} = workerData
let proto = Object.getPrototypeOf(derived)

console.log(proto)
Object.setPrototypeOf(obj,proto)
console.log(obj)

parentPort.once('message',  (time) => {
    setTimeout(() => {
        console.log(time)
        obj.age += time.time
        obj.delete()

        parentPort.postMessage(obj.age);
    }, time.time)


});
const { derived } = require('./modules/derived')
const { writeFile } = require('./services/file-service')
const { Worker } = require('worker_threads')

derived.age = 120
writeFile()

let threadsArray = []

for (let i = 0; i < 10; i++) {
    workerPromise = new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData: { obj: derived } });
        let time = 1500
        worker.postMessage({ time });
        worker.on('message', async (result) => {
            resolve(result)
        });
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) { reject(new Error(`stopped with ${code} exit code`)); }
        });
    });
    threadsArray = [...threadsArray, workerPromise];
}
console.log(threadsArray.length)

async function execute() {
    await Promise.all(threadsArray).then(values => {
        console.log(values)
    })

}



execute()


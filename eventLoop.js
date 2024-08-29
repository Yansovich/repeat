const userData = {
    name: 'sv',
    age: 30
}

// console.log('start: UserData', userData);

class MyPromise {
    constructor(executor) {
        this.lineHandler = []
        this.errorHandler = () => {}
        this.finallyHandler = () => {}

        try {
            executor(this.reasolve.bind(this), this.reject.bind(this))
        } catch (e) {
            this.errorHandler(e)
        }
        
    }

    reasolve(data) {
        this.lineHandler.forEach(callback => {
            data = callback(data)
        })
        this.finallyHandler()
    }

    reject(err) {
        this.errorHandler(err)
        this.finallyHandler()
    }

    then(fn) { 
        // необходима для чейнинга then
        this.lineHandler.push(fn)
        // возвращает объект, который содержит все методы инстанса класса 
        return this
    }

    catch(fn) {
        this.errorHandler = fn
        return this
    }

    finally(fn) {
        this.finallyHandler = fn
        return this
    }
}

// const promise = new Promise ((reasolve, reject) => {
//     console.log('executor RUN');

//     setTimeout(() => {
//         reasolve(userData)
//         console.log('setTimeout into executor');
//     }, 1500)
// }) 
// console.log(promise);

// promise
//     .then((result) => {
//         console.log('then 1');
//         console.log(result);
//         result.done = true
//         return result
//     })
//     .then((result) => {
//         console.log('then 2');
//         console.log(result);
//         return result
//     })
//     .catch(e => {
//         console.log(e)
//         return 'error'
//     })
//     .finally(() => {
//         console.log('finally')
//     })

// console.log('finish script');

const promise1 = new Promise (() => {

})
console.log(promise1);

// const promise =  fetch('https://jsonplaceholder.typicode.com/photos/1')
// console.log(promise);

const img = document.querySelector('.img')
const title = document.querySelector('.title')

// promise
//     .then(data => {
//        const result = data.json()
//        console.log(result);
//        return result
//     })
//     .then(response => {
//         console.log(response)
//         img.src = response.thumbnailUrl
//         title.innerHTML = response.title
//     })
       

// 1
// console.log('start');

// setTimeout(() => {
//     console.log('setTimeout 1');
// }, 0)
// Promise.resolve('resolve')   // сразу разрешенный
// .then(() =>{
//     console.log('promise1');
// })
// .then(() =>{
//     console.log('promise2');
// })

// setTimeout(() => {
//     console.log('setTimeout 2');
// }, 0)

// //синхронный код
// //микротаски   1. 'promise1'
// //макротаски   1. 'setTimeout 1' 1. 'setTimeout 2' // сначала макротаски
// // result ->  1)'start' / 2) 'end' / 3) 'promise1' / 4) 'promise2' / 5) 'setTimeout 1' / 6) 'setTimeout 2'

// console.log('end');


// 2
// console.log('start');

// function foo () {
//     setTimeout(() => {
//     console.log('setTimeout 1');
//     }, 0)
// }

// Promise.resolve('resolve2')   // сразу разрешенный
// .then(() =>{
//     console.log('promise1');
// })
// .then(() =>{
//     console.log('promise1');
// })

// Promise.resolve('resolve')   // сразу разрешенный
// .then(() =>{
//     console.log('promise2');
// })
// .then(() =>{
//     console.log('promise2');
// })

// setTimeout(() => {
//     console.log('setTimeout 2');
// }, 0)

// foo ()
// //синхронный код
// //микротаски   1. 'promise1'
// //макротаски   1. 'setTimeout 1' 1. 'setTimeout 2' // сначала макротаски
// // result ->  1)'start' / 2) 'end' / 3) 'promise1' / 4) 'promise2' / 5) 'setTimeout 1' / 6) 'setTimeout 2'

// console.log('end');

//3
console.log('start')

function foo() {
    setTimeout(() => {
        console.log('setTimeout 1')
    }, 0)
}
const promise = new Promise((resolve) => {
    console.log('executor start');
    setTimeout(() => {
        console.log('setTimeout into pormise');  // макро
        resolve('resolve')

    })
    console.log('executor finish');

})
    Promise.resolve('resolve2')
        .then(() => {
            console.log('promise 2'); // микро
        })
        .then(() => {
            console.log('promise 2'); // микро
        })

    promise.then(() => {
            console.log('promise 1'); // разрешен -> микро
        })
        .then(() => {
            console.log('promise 1'); // разрешен -> микро
        })

    setTimeout(() => {
        console.log(' setTimeout 2')  // макро
    }, 0)

    foo()
    console.log('end')

    /*
    'start'
    'executor start'
    'executor finish'
    'end'

    'promise 2'
    'promise 2'
    'setTimeout into pormise'

    'promise 1'
    'promise 1'

    'setTimeout 2'  
    'setTimeout 1'
    */

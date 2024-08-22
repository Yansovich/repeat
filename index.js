// const input = document.getElementById('input')
// const btn = document.getElementById('btn')
// console.log(input);

// let inputValue = ''

// input.addEventListener('input', (e) => {
//     console.log(e.target.value);

//     inputValue = e.target.value

    
// })
// btn.addEventListener('click', (e) => {
//     console.log(e);

    
// })

// const userName = {}


// class CreateDrop {
//     constructor(name) {
//         this.name = name
//     }

//     CreateDrop() {
//     }
// } 

// class Drop extends CreateDrop {
//     constructor(w, h, name) {
//         super(name)
//         this.w = w
//         this.h = h
//     }

//     generateRandom() {
//     }

//     generateRandomOperation() {
//     }

//     getResult() {
//     }
// }

// const arr = []

// const id = setInterval(() => {
//     if (arr.length >= 5) {
//         clearInterval(id)
//         return
//     }
//     const drop = new Drop (50, 50)
//     arr.push(drop)
//     console.log(arr);
// }, 2000);

// const f = 3
// const s = 7
// const operator = ['-', '+', '/', '*']

// function randonExpression () {
//     let firstNum = getRandomIntInclusive (0, 10)
//     let secondNum = getRandomIntInclusive (0, 10)
//     const operator = '-'
//     if (firstNum < secondNum && (operator === '-' || operator === '/')) {
//         [firstNum, secondNum] = [secondNum, firstNum]
//     }
//     if (operator === '/' && firstNum % secondNum !=0) {
//         firstNum -= firstNum % secondNum
//     }

//     return (firstNum, secondNum, operator)
// }


// TypeError
// let str = 'str'
// // str()
// let obj = {}
// obj.map()
// let num = 24
// num.toUpperCase()

// ReferenceError
// // console.log(age);
// let age = 32

// SintaxError
// console.log(age);
// const car
// {]}
// const foo = ;  

//RangeError
// let arr = new Array(-1)
// console.log(arr);

//EvalError

//Error
// let er = new Error ('ce')
// console.log(er);

//синтаксис
// try {
//     // cod
// } catch (error) {
//     // oбработка ошибки   
// }

// пример 1
// try {
//     console.log('TRY');
// } catch (error) {
//     console.log('CATCH');
// }

// // пример 2
// try {
//     console.log('TRY2');
//     console.log(notVariable);
//     console.log('этот код не выполнится');
// } catch (error) {
//     console.log(error);
//     console.log('CATCH2');
// }
// console.log('скрипт дошел до конца');

// пример 3
// try {
//     console.log('TRY3');
//     let str = 'str'
//     str()
// } catch (error) {
//     console.log(error);
//     console.log('CATCH3');
// }
// console.log('скрипт дошел до конца');

// пример 4
// try {
//     console.log('TRY4');
//     const arr = [1, 2, 3, 4]
//     const result = arr.map((i) => {
//         console.log(i);
//         return i()
//     })
//     console.log(result);
// } catch (error) {
//     console.log('CATCH4');
// }
// console.log('скрипт дошел до конца');

// пример 4.1
// try {
//     console.log('TRY4.1');
//     const arr = [1, 2, 3, 4]
//     const result = arr.map((i) => {
//         try {
//             console.log(i);
//             return i()
//         } catch (error) {
//             console.log('возникла ошибка в map');
//         }
//     })
//     console.log(result);
// } catch (error) {
//     console.log('CATCH4.1');
// }
// console.log('скрипт дошел до конца');

// пример 5
// try {
//     console.log('TRY5');
//     var qw@ = 123
// } catch (error) {
//     console.log('CATCH5');
// }
// console.log('скрипт дошел до конца');

// пример 6
// try catch - работают синхронно 
// try {
//     console.log('TRY6');
//     setTimeout(() => {
//         let str = 'str'
//         str()
//     }, 1000)
// } catch (error) {
//     console.log('CATCH6');
// }
// console.log('скрипт дошел до конца');

// пример 7
// try {
//     console.log('TRY7');
//     setTimeout(() => {

//         try {
//             let str = 'str'
//             str()
//         } catch (e) {
//             console.log('нашел');
//         }
        
//     }, 1000)
// } catch (error) {
//     console.log('CATCH7')
// }
// console.log('скрипт дошел до конца');

// // пример 8
// try {
//     console.log('TRY8');
//     AAA
// } catch (error) {
//     console.log('CATCH8')
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }
// console.log('скрипт дошел до конца');

// // пример 9
// try {
//     console.log('TRY9');
//     AAA
// } catch {
//     console.log('CATCH9')
// }
// console.log('скрипт дошел до конца');

// // пример 10
// try {
//     console.log('TRY10');
//     const json = '{"age": 32}'
//     const parseJson = JSON.parse(json)

//     if (parseJson.name) {
//         // cod
//     } else {
//         // дай пользователю понять, что что-то пошло не так
//         throw new Error('наше собственное сообщение об ошибке')
//         console.log(er.name);
//         console.log(er.message);
//         console.log(er.stack);
//         // throw er 
//     }
//     console.log(parseJson)
// } catch (e) {
//     console.log('CATCH10')
//     console.log(e);
//     console.log(e.name);
//     console.log(e.message);
// } finally {
//     console.log('выполнение кода в любом случае');
// }
// console.log('скрипт дошел до конца');

// // пример 11
// function foo () {
//     try {
//         console.log('TRY11');
//         if (confirm('Выбросить ошибку?')) {
//             noFoo()
//         } else {
//             return 'TRY - second'
//         }
//     } catch (e) {
//         console.log('CATCH11')
//         console.log(e);
//     } finally {
//         console.log('finaly with return - first');
//     } 
// }
// console.log(foo());
// console.log('скрипт дошел до конца');

// // пример 12
// function funcWithOutCatch () {
//     try {
//         console.log('TRY12');
//         // code
//     } finally {
//         throw new Error ('text for error')
//     } 
// }
// window.onerror = function (message, url, line, col, error) {
//     console.log('ошибка');
//     console.log('message', message);
//     console.log('url', url);
//     console.log('line', line);
//     console.log('col', col);
//     console.log('error', error);
// }

// funcWithOutCatch();
// console.log('скрипт дошел до конца');

// пример 13
class CustomError extends Error {
    constructor(message) {
        super(message)
        // this.name = 'CustomError'
        this.name = this.constructor.name
        this.stack = (new Error()).stack
        this.somethingDo()
    }

    somethingDo() {
        alert('Hi!')
    }
}
try {
    throw new CustomError('ты ошибся')
} catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
}

console.log('скрипт дошел до конца');


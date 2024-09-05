// console.log('start');

// setTimeout(() => {
//     console.log('setTimeout 1'); // macro
// }, 0)

// Promise.resolve()
//     .then(() => {                // micro
//     console.log('promise 1')

//     setTimeout(() => {
//         console.log('timeout in promise 1');
//     }, 0)
// }).then(() => {
//     console.log('promise 2')
// });

// (async () => {
//     console.log('async 1');         // сразу вызываем и выполняем стр. 25
//     await new Promise(resolve => {  // экзикютор выпол. как синхр. код
//         console.log('async in promise 1');
//         resolve()
//     })
//     console.log('async 2');
// }) ()

// Promise.resolve()
// .then(() => {
//     console.log('promise 3');
// })
// .then(() => {
//     console.log('promise 4');
// })

// setTimeout(() => {
//     console.log('setTimeout 2');
// }, 0)

// console.log('end');

// start
// async 1
// async in promise 1
// end
// promise 1
// async 2
// promise 3
// promise 2
// promise 4
// setTimeout 1
// setTimeout 2
// timeout in promise 1

//


/*

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(result => {
    console.log(result)
    if (!result.ok) throw new Error('запрос не успешен')
    const body = result.json()
    console.log(body)
    return body
})
.then(body => {
    console.log(body)
})
.catch(e) => {
    console.log(e)
})
.finally(() => {
    console.log('запрос завершен')
})

*/

// const baseUrl = 'https://jsonplaceholder.typicode.com'

// async function getUser (userId) {

//     try {
//        const response = await fetch(`${baseUrl}/${userId}`);
//     if (!response.ok) {
//         throw new Error('запрос не успешен')
//     }
//     const user = await response.json()
//     console.log(user); 
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log('запрос завершен');
//     }    
// }

// const result = getUser(10)
// console.log(result);

// const btn = document.querySelector('button')
// btn.addEventListener('click', getTodos)

// async function getTodos () {
   
//  try {
//     const response = await fetch (`${baseUrl}/todos`);

//     if (!response.ok) {
//         throw new Error('запрос не успешен')
//     }

//     const todos = await response.json();
//     console.log(todos);

//     const complited = todos.filter(todo => todo.complited)

// } catch (e) {
//     console.log(e);
//  } finally {
//     console.log('запрос завершен');
//  } 
 
// }

// function renderTodo (todos) {
//     const items = todos.map(item => {
//         return `<li>${item.title}</li>`
//     }).join('')
//     console.log(items);

//     return `<ul>
//     ${items}
//     </ul>`
// }


// function foo () {
//     try {
//         console.log('try');
//         return 1
//     } finally {
//         console.log(2);
//     }
// }
// console.log(foo());

// function foo2 () {
//     return 2
//     try {
//         console.log('try');
//     } finally {
//         console.log(1);
//     }
// }
// console.log(foo2());

// function foo3 () {
//     try {
//         return 1
//     } finally {
//         return 2
//     }
// }
// console.log(foo3());


const baseUrl = 'https://jsonplaceholder.typicode.com'
const baseUrl1 = 'https://jsonplaceholder.typicode.com/posts'


async function getDataByAsync () {
    const response = await fetch(`${baseUrl}/posts`);

    const posts = await response.json();
    console.log(posts);
}
// getDataByAsync()

async function getDataByPromise () {
    
    const response = await fetch(`${baseUrl}/posts`)
    const data = await response.json()     
}

function getDataByPromise () {
    
    const response = fetch(`${baseUrl}/posts`)  
    response
    .then (res => {
        return res.json()
    })
    .then ((data) => console.log(data))
}
// getDataByPromise()

// POST

async function getDataByAsync () {
    
    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({name: 'q', age: 10})
    }
    const response = await fetch(baseUrl1, fetchOptions)
    const data = await response.json()     
}
// getDataByAsync()


async function getDataByAsync2 () {
    
    try {
        const fetchOptions = {
        method: 'POST',
        body: JSON.stringify({name: 'q', age: 10})
    }
    const response = await fetch(baseUrl1, fetchOptions)
    const data = await response.json()     
    if (!response.ok) {
        throw new Error ('text for error')
    }
    } catch (e) {
        console.log(e);  
    } finally {
        console.log('ошибка');
    }
}
// getDataByAsync2()


const fetchOptions = {
    method: 'POST',
    body: JSON.stringify({name: 'q', age: 10})
}

function getDataByPromise2 () {

    const response = fetch(baseUrl1, fetchOptions)
    response
    .then (res => {
        if (res.ok) {
          return res.json()  
        } else {
            throw new Error ('ошибка')
        }  
    })
    .catch ((er) => {
        console.log(er)
        return {status: 'ok'}
    })
    .then (data => console.log(data))
    .finally(() => console.log('finally'))   
}
// getDataByPromise2()





const baseUrl2 = 'https://jsonplaceholder.typicode.com/posts/1'

const obj = {
    method: 'PUT',
    body: JSON.stringify({name: 'ww', age: 10}) 
}

async function getDataByAsync3 () {
    try {
        const response = await fetch (baseUrl2, obj)
        const data = await response.json()

        if(!response.ok) {
            throw new Error ('NEW ERROR')
        }
    }
    catch (e) {
        console.log(e);
    }
    finally {
        console.log('FINALLY');
    }
}
// getDataByAsync3()

const obj2 = {  
    body: JSON.stringify({
        id: 1,
        tittle: 'good'
    }) 
}

const obj3 = {
    method: 'PUTCH',
    
    body: JSON.stringify({
        id: 1,
        tittle: 'bad'
    }) 
}

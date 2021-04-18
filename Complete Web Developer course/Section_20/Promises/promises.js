/*

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve("Stuff Worked")
    } else {
        reject("Error, it broke")
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me that your looking for')
}) .then (values => {
    console.log(values);
})

Promise.all([promise, promise2, promise3, promise4]);

promise
.then(results => results + "!")
.then (result2 => {
    //throw Error
    console.log(result2);
})
.then(result3 => {
    console.log(result3 + '!');
})
.catch(console.log)
*/

const urls = [
    'https://jsonplaceholder.typicode.com/users', 
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=>resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'))

const promisefour = new Promise((resolve, reject) => setTimeout(resolve, 300));
const promisefive = new Promise((resolve, reject) => setTimeout(reject, 3000));

Promise.allSettled([promisefour, promisefive]).then(data=>console.log(data))
.catch(e => console.log('something failed', e));


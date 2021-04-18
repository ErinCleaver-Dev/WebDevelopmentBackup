
/*
async function playerStart () {
    await movePlayer(100, 'Left');
    await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json)
.then(console.log)


async function fetchUsers() {
    const respon = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respon.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users', 
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const userDatas = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(resp=>resp.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (error) {
        console.log('Error: ', error);
    }

}

const getData2 = async function() {
    const arrayOfPromises = urls.map(url =>
        fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}

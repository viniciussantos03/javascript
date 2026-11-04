// get com fetch

fetch('https://jsonplaceholder.typicode.com/todos')

.then((response) => response.json())

.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

// get com axios

axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
    console.log(response.data)
})
.catch((error) => {
    console.log(error)
})

// post com fetch 

const data = {
    title: 'Algum título...',
    content: 'Algum conteúdo...',
    userId: 1
}


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
})
 .then((response) => response.json())

 .then((data) => {
     console.log(data)
 })
 .catch((error) => {
     console.log(error)
 })

// post com axios

axios.post('https://jsonplaceholder.typicode.com/posts', data).then((response) => {
    console.log(response.data)
})
.catch((error) => {
    console.log(error)
})
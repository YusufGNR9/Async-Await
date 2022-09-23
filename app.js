import axios from "axios"

export const getData = (userId) => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then(response=> {
        console.log(response.data)
        axios.get("https://jsonplaceholder.typicode.com/posts?userId=2").then(response=> {
                console.log(response.data)})
    })
}

getData();
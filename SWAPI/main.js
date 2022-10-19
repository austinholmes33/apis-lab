const residents = document.querySelector("#residents")
const baseURL = 'http://swapi.dev/api'
let body = document.querySelector('body')

function btnClick () {
    axios.get(baseURL + '/planets/?search=Alderaan')
    .then(response => {
        let arr = response.data.results[0].residents
        for(i = 0; i < arr.length; i++) {
            axios.get(arr[i])
            .then(response2 => {
                let person = response2.data.name
                let name = document.createElement('h2')
                name.textContent = person
                body.appendChild(name)
            })
        }
})
    .catch((error) => console.log(error))
}

residents.addEventListener('click', btnClick)
// https://api.chucknorris.io/jokes/random
console.log("Hello from fetch")

interface IChuckResponse {
    icon_url : string;
    id : string;
    url: string;
    value: string;
}

let joke = document.getElementById('btn');
joke.addEventListener("click", getJoke)

function getJoke() {
    let url = "https://api.chucknorris.io/jokes/random"
    fetch(url)
        .then(res => res.json())
        .then((json : IChuckResponse) => console.log(json.value))
}


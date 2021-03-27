// https://api.chucknorris.io/jokes/random
console.log("Hello from fetch");
var joke = document.getElementById('btn');
joke.addEventListener("click", getJoke);
function getJoke() {
    var url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (json) { return console.log(json.value); });
}
// let para = document.createElement("p");
// para.append

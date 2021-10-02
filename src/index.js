document.getElementById("submit-btn").addEventListener("click", event => {
    console.log(document.getElementById("search-input").value);
})

let url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=13e3b1f659caaf6f9037465e97315952"

async function getResponse(url){
    let response = await fetch(url)
}
function DomOp(){
    function appenedElement(element,id){
        document.getElementById(id).appendChild(element);
    }
    
    function clearTextContent(id){
        document.getElementById("error-message").textContent = '';
    }
    
    function getValue(id){
        return document.getElementById(id).value;
    }

    function appendError(msg){
        document.getElementById("error-message").textContent = msg;
    }

    function createDiv(id){
        let div = document.createElement('div');
        div.setAttribute("id",id);
        return div;
    }

    function createWeatherCard(response){
        let cityheader = createDiv("city-header");
        cityheader.textContent = "City";
        let card = createDiv("weather-card");
        let city = createDiv("city");
        city.textContent = response.name;
        let icon = document.createElement("img");
        icon.setAttribute("id","icon");
        icon.src = getIcon(response);
        let temperatureheader = createDiv("temperature-header");
        temperatureheader.textContent = "Temperature";
        let temperature  = createDiv("temperature");
        temperature.textContent = response.main.temp + '\u00B0 C';
        let descriptionheader = createDiv("description-header");
        descriptionheader.textContent = "Description";
        let description = createDiv("description");
        description.textContent = Capitalize(response.weather[0].description);
        let feelslikeheader = createDiv("feelslike-header");
        feelslikeheader.textContent = "Feels Like";
        let feelslike = createDiv("feels-like");
        feelslike.textContent = response.main.feels_like + '\u00B0 C';
        let humidityheader = createDiv("humidity-header");
        humidityheader.textContent = "Humidity";
        let humidity = createDiv("humidity");
        humidity.textContent = response.main.humidity + "%";
    
        let array = [cityheader, city, temperatureheader, icon, temperature, descriptionheader, 
            description, feelslikeheader, feelslike, humidityheader, humidity];
    
        array.forEach(div => {
            card.appendChild(div);
        })
    
        return card;
    }

    function handleErrors(response){
        if (!response.ok){
            appendError("City not found");
        }
        return response;
    }

    function Capitalize(message){
        let words = message.split(" ");
        let msg = '';
    
        for (let i = 0; i<words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            msg += words[i] + " ";
        }
    
        return msg.trim();
    }
    
    function getIcon(response){
        let icon = response.weather[0].icon;
        let url = "https://openweathermap.org/img/w/"+icon+".png"
        return url;
    }

    function getURL(city){
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=13e3b1f659caaf6f9037465e97315952&units=metric";
        return url;
    }

    return {appenedElement, clearTextContent, getValue, appendError, 
        createDiv, createWeatherCard, handleErrors, Capitalize, getIcon, getURL}
}

export {DomOp};
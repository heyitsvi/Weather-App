import {DomOp} from "./dom.js";


(function pageload(){
    async function getResponse(url){
        let response = await fetch(url, {mode:"cors"});
        let json  = await DomOp().handleErrors(response).json();
        return json;
    }
    
    (async function getInput() {
        document.getElementById("submit-btn").addEventListener("click", event => {
            if(DomOp().getValue("search-input") == ""){
                DomOp().appendError("Please Enter a City");
            }
            else{
                DomOp().clearTextContent("search-input");
                getResponse(DomOp().getURL(DomOp().getValue("search-input")))
                    .then((response) => {
                        if (document.getElementById("data").children.length > 1){
                            DomOp().appenedElement(DomOp().createWeatherCard(response), "data");
                        }
                        else{
                            document.getElementById("data").innerHTML = '';
                            DomOp().appenedElement(DomOp().createWeatherCard(response), "data");
                        }
                    });
            }
        })
    })()
})()












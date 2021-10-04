(()=>{"use strict";function e(){function e(e){document.getElementById("error-message").textContent=e}function t(e){let t=document.createElement("div");return t.setAttribute("id",e),t}function n(e){let t=e.split(" "),n="";for(let e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].slice(1),n+=t[e]+" ";return n.trim()}function r(e){return"https://openweathermap.org/img/w/"+e.weather[0].icon+".png"}return{appenedElement:function(e,t){document.getElementById(t).appendChild(e)},clearTextContent:function(e){document.getElementById("error-message").textContent=""},getValue:function(e){return document.getElementById(e).value},appendError:e,createDiv:t,createWeatherCard:function(e){let a=t("city-header");a.textContent="City";let i=t("weather-card"),o=t("city");o.textContent=e.name;let c=document.createElement("img");c.setAttribute("id","icon"),c.src=r(e);let d=t("temperature-header");d.textContent="Temperature";let l=t("temperature");l.textContent=e.main.temp+"° C";let u=t("description-header");u.textContent="Description";let m=t("description");m.textContent=n(e.weather[0].description);let p=t("feelslike-header");p.textContent="Feels Like";let s=t("feels-like");s.textContent=e.main.feels_like+"° C";let h=t("humidity-header");h.textContent="Humidity";let C=t("humidity");return C.textContent=e.main.humidity+"%",[a,o,d,c,l,u,m,p,s,h,C].forEach((e=>{i.appendChild(e)})),i},handleErrors:function(t){return t.ok||e("City not found"),t},Capitalize:n,getIcon:r,getURL:function(e){return"http://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=13e3b1f659caaf6f9037465e97315952&units=metric"}}}!async function(){document.getElementById("submit-btn").addEventListener("click",(t=>{""==e().getValue("search-input")?e().appendError("Please Enter a City"):(e().clearTextContent("search-input"),async function(t){let n=await fetch(t,{mode:"cors"});return await e().handleErrors(n).json()}(e().getURL(e().getValue("search-input"))).then((t=>{document.getElementById("data").children.length>1||(document.getElementById("data").innerHTML=""),e().appenedElement(e().createWeatherCard(t),"data")})))}))}()})();
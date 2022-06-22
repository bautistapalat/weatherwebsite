/*------------------------navbar---------------------------*/
const configBTN = document.querySelector("#config");//btn for the config gear
const configdiv = document.querySelector("#configcontainer");//color themes div
const searchBTN = document.querySelector("#searchbtn");//btn for the search function
const searchdiv = document.querySelector("#searchcontainer");//input for location

//slide the search or config function
function slidenav(button,div){
    button.addEventListener("click", (e)=>{
    e.preventDefault();
    div.classList.toggle("active");
});
}
//calling out the functions with its callbacks
slidenav(configBTN,configdiv);
slidenav(searchBTN,searchdiv);

/*-----------------------------------------------------------*/
/*-------------------AJAX WEATHER API---------------------------*/

let weather = {
    apiKey: "0fdf46ee276c0a3511631d7bf5c28a4a",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
    .then((response)=>{
        if(!response.ok){
            alert("No weather found, please enter a valid city name");
            throw new Error("No weather found.");
        }
        return response.json();
    })
    .then((data)=> this.displayWeather(data));
    },
    displayWeather: function (data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, feels_like, temp_min, temp_max} = data.main;
        const { speed } = data.wind;
        const { lat, lon } = data.coord;
        document.querySelector("#citytext").innerText = " " + name;
        document.querySelector(".sky").innerText = description;
        document.querySelector("#temp").innerText = temp.toFixed(1) + "°C";
        document.querySelector("#termic").innerText = feels_like.toFixed(1) + "°C";
        document.querySelector("#humidity").innerText = humidity + "%";
        document.querySelector("#maxtemp").innerText = temp_max.toFixed(1) + "°C";
        document.querySelector("#mintemp").innerText = temp_min.toFixed(1)+ "°C";
        document.querySelector("#wind").innerText = speed.toFixed(1) + "km"
        let latitud = lat;
        let longitud = lon;
        const divarray = document.querySelectorAll("div");
        switch(description){
            case "few clouds":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("cloudsun").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://images4.alphacoders.com/119/1195479.jpg)";
            break;
            case "overcast clouds":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("cloud").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://images4.alphacoders.com/119/1195479.jpg)";
            break;
            case "Clouds":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("cloud").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://images4.alphacoders.com/119/1195479.jpg)";
            break;
            case "clear sky":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("sun").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://fondosmil.com/fondo/54347.jpg)";
            break;
            case "broken clouds":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("cloudsun").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://images4.alphacoders.com/119/1195479.jpg)";
            break;
            case "scattered clouds":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("cloudsun").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://images4.alphacoders.com/119/1195479.jpg)";
            break;
            case "light rain":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("sunrain").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://cutewallpaper.org/25/anime-backyard-rain-wallpaper-engine/220806742.jpg)";
            break;
            case "mist":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("fog").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://images.hdqwalls.com/download/firewatch-trees-pic-3840x2400.jpg)";
            break;
            case "haze":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("fog").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://images.hdqwalls.com/download/firewatch-trees-pic-3840x2400.jpg)";
            break;
            case "light snow":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("snowflake").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://img4.goodfon.com/wallpaper/nbig/b/a7/firewatch-winter-zima-mounts-gory-maiak-svet-les-derevia-elk.jpg)";
            break;
            case "snow":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("snowflake").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://img4.goodfon.com/wallpaper/nbig/b/a7/firewatch-winter-zima-mounts-gory-maiak-svet-les-derevia-elk.jpg)";
            break;
            case "moderate rain":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("sunrain").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://cutewallpaper.org/25/anime-backyard-rain-wallpaper-engine/220806742.jpg)";
            break;
            case "light intensity drizzle":
                divarray.forEach((div)=>{
                    div.classList.remove("active");
                })
                document.getElementById("sunrain").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://cutewallpaper.org/25/anime-backyard-rain-wallpaper-engine/220806742.jpg)";
            break;
            case "drizzle":
                divarray.forEach((div)=>{
                    div.classList.remove();
                })
                document.getElementById("sunrain").classList.add("active");
                document.querySelector(".hero").style.backgroundImage = "url(https://cutewallpaper.org/25/anime-backyard-rain-wallpaper-engine/220806742.jpg)";
        }
}
}
    
let citydisplay = "Buenos Aires";
weather.fetchWeather(citydisplay);
const btnsearch = document.querySelector("#search");
btnsearch.addEventListener("click", (e)=>{
    e.preventDefault();
    citydisplay = document.getElementById("buscarpais").value;
    weather.fetchWeather(citydisplay);
})
console.log(citydisplay)
let locationText = document.querySelector("#temp");

//alert message viewsize error
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

if (windowHeight <= 600 || windowWidth <=1000){
    alert("website not available for mobile phones");
    window.close();
}


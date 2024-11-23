const apikey = "4db00382b769e8c30c66363206f31d03";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".wheather-icon")



async function checkWeather(city){
    const   response = await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".wheather").style.display="none"; 

    }
    else{
        
    var data =await response.json();


    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/ph";
    
        if(data.weather[0].main== "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main== "Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main== "Mist"){
            weatherIcon.src="images/mist.png";
        }
        else if(data.weather[0].main== "Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main== "Snow"){
            weatherIcon.src="images/snow.png";
        }
    
        document.querySelector(".wheather").style.display="block"; 
        document.querySelector(".error").style.display="none";

    }
}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})






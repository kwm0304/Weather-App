//1.function to initialize page
const start = {
//2.Function scoped variables
key: "fcd077c334b80e0c9cb4120aceb5982c",
//3. fetchWeather(city)
    fetchWeather: function (city) {
        //3b.fetch(url)->response->data->catch error->send to displayWeather
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=" + this.key)
        .then((response) => {
          if (!response.ok) {
            alert("Please try again");
            throw new Error("Please try again");
          }
          return(response.json());
        })
        .then((data) => start.displayWeather(data)) 

    },
    
//4.showWeather(response)
displayWeather: function (response) {
    //4a.function scoped variables
        //currentEl's, 
        const map = new Map();
        map.set('01d', './images/01d.png')
        map.set('01n', './images/01n.png')
        map.set('02d', './images/02d.png')
        map.set('02n', './images/02n.png')
        map.set('03d', './images/03d.png')
        map.set('03n', './images/03n.png')
        map.set('04d', './images/04d.png')
        map.set('04n', './images/04n.png')
        map.set('09d', './images/09d.png')
        map.set('09n', './images/09n.png')
        map.set('10d', './images/10d.png')
        map.set('10n', './images/10n.png')
        map.set('11d', './images/11d.png')
        map.set('11n', './images/11n.png')
        map.set('13d', './images/13d.png')
        map.set('13n', './images/13n.png')
        map.set('50d', './images/50d.png')
        map.set('50n', './images/50n.png');

        let currentCity = document.getElementById("current-city-name");
        let currentIcon = document.getElementById("current-icon");
        let currentDesc = document.getElementById("current-desc");
        let currentTemp = document.getElementById("current-temp");
        let currentHumid = document.getElementById("current-humidity");
        let currentWind = document.getElementById("current-wind");
        
        //4b.link 4a to html for current city
        //currentEl->response
        currentCity.innerHTML = response.name;
        currentIcon.innerHTML = "<img src ='"+map.get(response.weather[0].icon)+"'/>";
        currentDesc.innerHTML = response.weather[0].description;
        currentTemp.innerHTML = response.main.temp + "F";
        currentHumid.innerHTML = "Humidity: " + response.main.humidity + "%";
        currentWind.innerHTML =   "Wind Speed: " + response.wind.speed + " MPH";
  },

  //link search bar to search button}
  search: function () {
    this.fetchWeather(document.querySelector("#citysearch").value);
  },
};

document.querySelector("#searchBtn").addEventListener("click", function () {
  start.search();
});

document.querySelector("#searchBtn").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      start.search();
    }
  });
  
    //4c.variables for 5-day forecast
    //4d.link 4c to html for corresponding days (iterate?) or list each
        //day#El->response



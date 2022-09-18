//1.function to initialize page
const start = {
//2.Function scoped variables
key: "fcd077c334b80e0c9cb4120aceb5982c",

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
//3. fetchWeather(city)

        let currentCity = document.getElementById("current-city-name");
        let currentIcon = document.getElementById("current-icon");
        let currentDesc = document.getElementById("current-desc");
        let currentTemp = document.getElementById("current-temp");
        let currentHumid = document.getElementById("current-humidity");
        let currentWind = document.getElementById("current-wind");
        var lon = response.coord.lon;
        var lat = response.coord.lat;
        
        //4b.link 4a to html for current city
        //currentEl->response
        currentCity.innerHTML = response.name;
        currentIcon.innerHTML = "<img src ='"+map.get(response.weather[0].icon)+"'/>";
        currentDesc.innerHTML = response.weather[0].description;
        currentTemp.innerHTML = response.main.temp + "F";
        currentHumid.innerHTML = "Humidity: " + response.main.humidity + "%";
        currentWind.innerHTML =   "Wind Speed: " + response.wind.speed + " MPH";
        var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + this.key + "&units=imperial";

        fetch(forecastUrl)
        .then((response) => {
            if (!response.ok) {
            alert("Please try again");
            throw new Error("Please try again");
            }
            return(response.json());
        })
        .then((data) => start.forecastWeather(data)) 
    },

forecastWeather: function (response) {
      //map to convert icon string to img
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

      //Day 1 variables 
      let date1El = moment().add(1, 'days');
        $("p.date-display1").html(date1El.format("L"));
      let iconDay1El = document.getElementById("icon1");
      let day1tempEl = document.getElementById("day1temp");
      let day1windEl = document.getElementById("day1wind")
      let day1humidityEl = document.getElementById("day1humidity");

      //variables->HTML
      iconDay1El.innerHTML = "<img src ='"+map.get(response.list[6].weather[0].icon)+"'/>"
      day1tempEl.innerHTML = "Temp: " + response.list[6].main.temp + " F";
      day1windEl.innerHTML = "Wind: " + response.list[6].wind.speed + " mph";
      day1humidityEl.innerHTML = "Humidity: " + response.list[6].main.humidity + " %";
  
      let date2El = moment().add(2, 'days');
        $("p.date-display2").html(date2El.format("L"));
      let iconDay2El = document.getElementById("icon2");
      let day2tempEl = document.getElementById("day2temp");
      let day2windEl = document.getElementById("day2wind")
      let day2humidityEl = document.getElementById("day2humidity");
  
      iconDay2El.innerHTML = "<img src ='"+map.get(response.list[14].weather[0].icon)+"'/>"
      day2tempEl.innerHTML = "Temp: " + response.list[14].main.temp + " F";
      day2windEl.innerHTML = "Wind: " + response.list[14].wind.speed + " mph";
      day2humidityEl.innerHTML = "Humidity: " + response.list[14].main.humidity + " %";

      let date3El = moment().add(3, 'days');
        $("p.date-display3").html(date3El.format("L"));
      let iconDay3El = document.getElementById("icon3");
      let day3tempEl = document.getElementById("day3temp");
      let day3windEl = document.getElementById("day3wind")
      let day3humidityEl = document.getElementById("day3humidity");
  
      iconDay3El.innerHTML = "<img src ='"+map.get(response.list[22].weather[0].icon)+"'/>"
      day3tempEl.innerHTML = "Temp: " + response.list[22].main.temp +  " F";
      day3windEl.innerHTML = "Wind: " + response.list[22].wind.speed + " mph";
      day3humidityEl.innerHTML = "Humidity: " + response.list[22].main.humidity + " %";

      let date4El = moment().add(4, 'days');
        $("p.date-display4").html(date4El.format("L"));
      let iconDay4El = document.getElementById("icon4");
      let day4tempEl = document.getElementById("day4temp");
      let day4windEl = document.getElementById("day4wind")
      let day4humidityEl = document.getElementById("day4humidity");
  
      iconDay4El.innerHTML = "<img src ='"+map.get(response.list[6].weather[0].icon)+"'/>"
      day4tempEl.innerHTML = "Temp: " + response.list[30].main.temp + " F";
      day4windEl.innerHTML = "Wind: " + response.list[30].wind.speed + " mph";
      day4humidityEl.innerHTML = "Humidity: " + response.list[30].main.humidity + " %";

      let date5El = moment().add(5, 'days');
        $("p.date-display5").html(date5El.format("L"));
      let iconDay5El = document.getElementById("icon5");
      let day5tempEl = document.getElementById("day5temp");
      let day5windEl = document.getElementById("day5wind")
      let day5humidityEl = document.getElementById("day5humidity");

      iconDay5El.innerHTML = "<img src ='"+map.get(response.list[38].weather[0].icon)+"'/>"
      day5tempEl.innerHTML = "Temp: " + response.list[38].main.temp + " F";
      day5windEl.innerHTML = "Wind: " + response.list[38].wind.speed + " mph";
      day5humidityEl.innerHTML = "Humidity: " + response.list[38].main.humidity + " %";
},   
  
      //4d.link 4c to html for corresponding days (iterate?) or list each
          //day#El->response

  //link search bar to search button}
  search: function () {
    this.fetchWeather(document.querySelector("#citysearch").value);
    let list = [];
    list.push ("city", (citysearch.value))
    localStorage.setItem("list", JSON.stringify(list))

    localStorage.getItem("list") 
    list = JSON.parse(localStorage.getItem("highscores"));
    const searchHistory1 = document.getElementById("search-history1")
    searchHistory1.innerHTML = list[1]
  
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

  





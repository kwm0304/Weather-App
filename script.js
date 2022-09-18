//1.function to initialize page
let start = {
//2.Function scoped variables
key: "fcd077c334b80e0c9cb4120aceb5982c",
//3. fetchWeather(city)
    fetchWeather: function (city) {
        //3b.fetch(url)->response->data->catch error
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=" + this.key)
        .then((response) => {
          if (!response.ok) {
            alert("Please try again");
            throw new Error("Please try again");
          }
          return response.json();
        })
        .then((data) => this.console.log(data));
    },
//4.showWeather(response)
    
    //4a.function scoped variables
        //currentEl's, 
    //4b.link 4a to html for current city
        //currentEl->response
    //4c.variables for 5-day forecast
    //4d.link 4c to html for corresponding days (iterate?) or list each
        //day#El->response
//link search bar to search button}
}

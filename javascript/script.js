console.log('weather Application');

const api={
    key: "b3b5b1452400f151f6667dedb0254d32",
    baseurl: "http://api.openweathermap.org/data/2.5/"
};

const textbox=document.querySelector('.search-box');
textbox.addEventListener('keypress',setQuery);

function setQuery(e){
   // console.log(e);
    if(e.keyCode===13){
        getresults(textbox.value);
        // console.log(textbox.value);
    }
}
function getresults(query){
    let url=`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`;
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
       // console.log(data);
        displayfunction(data);
    });
}
function displayfunction(weather){
    // console.log(weather);
    let cityname=weather.name;
    // console.log(cityname);

    let countryname=weather.sys.country;
    // console.log(countryname);

    let now=new Date();
    let date=now.getDate();
    let month=now.getMonth();
    let year=now.getFullYear();
    let day=now.getDay();
    
    let days=["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"];
    // console.log(days[day]);
    // console.log(date,month+1,year);

    let temperature=weather.main.temp;
    // console.log(temperature);

    answer=document.getElementById("answer");
    let str=`
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1>${temperature}°C</h1>
                <p>${cityname}, ${countryname}</p>
                <p>${days[day]} , ${date}:${month+1}:${year}</p>
                <p>Wind Speed is ${weather.wind.speed}</p>
                </div>
            </div>
    `
    answer.innerHTML=str;
}
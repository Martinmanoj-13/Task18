async function getCountry(){

    var countryNames = document.getElementById('countryNames')

    let weatherReport = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=kabul&appid=dbc05f3cb117c754eeed7683d3a74d7a`)

    let res = await weatherReport.json()
    console.log(res);
    var weatherCard = document.getElementById('weatherCard');
    weatherCard.innerHTML=`<div class="card" style="width:33rem">
    <img src="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d" width:50px class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">City Name : ${res.name}</p>
      <p class="card-text">Temperature : ${res.main.temp}</p>
      <p class="card-text">Windspeed: ${res.wind.speed}</p>
      <p class="card-text">Humidity : ${res.main.humidity}</p>
     
    </div>
  </div>`
}
async function getCountry1(){

    var countryNames = document.getElementById('countryNames')

    let weatherReport = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Mariehamn&appid=dbc05f3cb117c754eeed7683d3a74d7a`)
    let res = await weatherReport.json()
    console.log(res);
    var weatherCard1 = document.getElementById('weatherCard');
    weatherCard1.innerHTML=`<div class="card" style="width:33rem">
    <img src="https://i.ytimg.com/vi/qCrHUxawcyM/maxresdefault.jpg" width:50px class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">City Name: ${res.name}</p>
      <p class="card-text">Temperature : ${res.main.temp}</p>
      <p class="card-text">Windspeed: ${res.wind.speed}</p>
      <p class="card-text">Humidity : ${res.main.humidity}</p>
     
    </div>
  </div>`
}
async function getCountry2(){ //it show's below in doc page
   var countryNames = document.getElementById('countryNames')
   let weatherReport = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=Tirana&appid=dbc05f3cb117c754eeed7683d3a74d7a`)
    let res = await weatherReport.json()
     console.log(res);
     var weatherCard2 = document.getElementById('weatherCard2');
    weatherCard2.innerHTML=`<div class="card" style="width:33rem">
    <img src="https://assets.thehansindia.com/h-upload/2019/12/01/241086-weather-forecast-andhra-pra.webp" width:50px class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">City Name: ${res.name}</p>
      <p class="card-text">Temperature : ${res.main.temp}</p>
      <p class="card-text">Windspeed: ${res.wind.speed}</p>
      <p class="card-text">Humidity : ${res.main.humidity}</p>
    </div>
  </div>`
}

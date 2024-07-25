//html
let search = document.querySelector("#search")
let bata = document.querySelector("#bata")
///

///function getData api


async function getData(city) {
  var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=906ed3de6f9e4277b0b120253241704&q=${city}&days=3`)
  var myData = await response.json()
  console.log(myData);
  onDay(myData)
  twoDay(myData)
  thereDay(myData)
}
getData("doha")

///

function onDay(myData) {
  let date = new Date(myData.location.localtime)
  console.log(date.toLocaleDateString('en-us', { weekday: 'long' }));
  document.getElementById("oneDay").innerHTML = date.toLocaleDateString('en-us', { weekday: 'long' })
  document.getElementById("month1").innerHTML = date.toLocaleDateString('en-us', { month: 'long' })
 //console.log(date.toLocaleDateString('en-us', { month: 'numeric' }));
// document.getElementById("month1").innerHTML = date.getMonth()
  document.getElementById("day1").innerHTML = date.getDate()
  document.getElementById("city").innerHTML = myData.location.name;
  document.getElementById("degree").innerHTML = myData.current.temp_c + 'oc';
  document.getElementById("weathrCondition").innerHTML = myData.current.condition.text;
  document.getElementById("iconImg").setAttribute('src', `https:${myData.current.condition.icon}`)

}




// function twoDay()
function twoDay(myData) {
  let date = new Date(myData.location.localtime)
  console.log(date.toLocaleDateString('en-us', { weekday: 'long' }));
  document.getElementById("twoDay").innerHTML = date.toLocaleDateString('en-us', { weekday: 'long' })
  document.getElementById("img").setAttribute('src', `https:${myData.forecast.forecastday[1].day.condition.icon}`)

  document.getElementById("max").innerHTML = myData.forecast.forecastday[1].day.maxtemp_c + 'oc';
  document.getElementById("minDageer").innerHTML = myData.forecast.forecastday[1].day.mintemp_c + 'oc';

  document.getElementById("humidity").innerHTML = myData.forecast.forecastday[1].day.condition.text;




}
// function thereDay()
function thereDay(myData) {
  let date = new Date(myData.location.localtime)
  console.log(date.toLocaleDateString('en-us', { weekday: 'long' }));
  document.getElementById("theerDay").innerHTML = date.toLocaleDateString('en-us', { weekday: 'long' })

  document.getElementById("imgIcoon").setAttribute('src', `https:${myData.forecast.forecastday[2].day.condition.icon}`)

  document.getElementById("degreeIcon").innerHTML = myData.forecast.forecastday[2].day.maxtemp_c + 'oc';

  document.getElementById("min2").innerHTML = myData.forecast.forecastday[2].day.mintemp_c + 'oc';
  document.getElementById("custom2").innerHTML = myData.forecast.forecastday[2].day.condition.text;
}
search.addEventListener("keyup", function () {
  getData(search.value);
})
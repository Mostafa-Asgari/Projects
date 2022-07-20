const input = document.querySelector('.input')
const cityName = document.querySelector('.city-name')
const calendar = document.querySelector('.calendar')
const temp = document.querySelector('.temp')
const italic = document.querySelector('.italic')
const tempLow = document.querySelector('.temp1')
const tempHigh = document.querySelector('.tempHigh')
document.body.style.userSelect='none'


input.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    fetchData();
  }
})

function fetchData() {
  let info = {
    city: input.value,
    key: '556f57639dad19a2e4566aeee0320691',
    api: 'https://api.openweathermap.org/data/2.5/weather?q='
  }
  fetch(`${info.api}${info.city}&appid=${info.key}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      cityName.innerHTML = `${data.name}, ${data.sys.country}`;
      // calendar.innerHTML =
      temp.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
      italic.innerHTML = `${data.weather[0].main}`
      tempLow.innerHTML = `${Math.floor(data.main.temp_min)}°c`
      tempHigh.innerHTML = `${Math.floor(data.main.max)}°c`
    })
    .catch(err => console.log(err))

}

let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function showDate() {
  let date = new Date();
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  let dateNow = date.getDate();
  let year = date.getFullYear();

  calendar.innerHTML = `${day} ${dateNow} ${month} ${year}`
}
showDate()







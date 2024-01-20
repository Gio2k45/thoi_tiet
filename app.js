var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value= document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(captitalSearch){
    
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${captitalSearch}&appid=92f483687ed2bd458d8b35ca93ab6bcf
    `
    
    let data = await fetch(apiURL).then(res=> res.json())
    if (data.cod == 200){
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        value.innerText = Math.round(data.main.temp - 273.15) + '°'
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')
    }else{
        content.classList.add('hide')
    }
}
search.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        let captitalSearch = search.value.trim()
        changeWeatherUI(captitalSearch)
    }
})

changeWeatherUI('Ha Noi')

const app = {
    handle: function () {
        async function SearchWeather() {
            const searchValue = document.getElementById('search').value.trim();
            let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=a527db92600ee99b5c6b9b0a2050c513`

            if (searchValue != '') {
                let data = await fetch(apiURL).then((data) => data.json())
                console.log(data)
                //xu ly du lieu sai
                if (data.cod == 200) {
                    document.getElementById('city--name').textContent = data.name
                    document.getElementById('city--temperature').textContent = Math.round(data.main.temp - 273.15) + '°C'
                    document.getElementById('humidity').textContent = data.main.humidity + '%'
                    document.getElementById('windspeed').textContent = data.wind.speed + ' km/h'
                } else if (data.cod == 404) {
                    document.getElementById('app-result').textContent = `Không tìm thấy ${searchValue}`
                    document.getElementById('app-result').setAttribute('style', 'color: #F05454')
                }
            }
        }
        document.getElementById('search').addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                SearchWeather()
            }
        })
        async function currentWeather() {
            let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=a527db92600ee99b5c6b9b0a2050c513`
            let data = await fetch(apiURL).then((data) => data.json())
            console.log(data)
            document.getElementById('city--name').textContent = data.name
            document.getElementById('city--temperature').textContent = Math.round(data.main.temp - 273.15) + '°C'
            document.getElementById('humidity').textContent = data.main.humidity + '%'
            document.getElementById('windspeed').textContent = data.wind.speed + ' km/h'
        }
        currentWeather()
    },
    render: function () {

    },
    start: function () {
        this.handle()
        this.render()
    }
}
app.start()
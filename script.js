
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '437f767a94msh939097087800b66p19e4ecjsn6bd2ca052cb8',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    if (city.trim().length === 0) {
        alert("Please enter some location");
        city = "bhopal";
    }

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            cityName.innerHTML = data.location.name;
            temp.innerHTML = data.current.temp_c;
            feels_like.innerHTML = data.current.feelslike_c;
            uv.innerHTML = data.current.uv;
            heatindex_c.innerHTML = data.current.heatindex_c;
            pressure.innerHTML = data.current.pressure_mb;
            speed.innerHTML = data.current.wind_mph;
            wind_degree.innerHTML = data.current.wind_degree;
            wind_dir.innerHTML = data.current.wind_dir;
            humidity.innerHTML = data.current.humidity;
            cloud.innerHTML = data.current.cloud;
            vis_km.innerHTML = data.current.vis_km;

            const icon = document.getElementById('icon');
            icon.src = "https:" + data.current.condition.icon;
            icon.alt = data.current.condition.text;
        })
        .catch(err => {
            alert("City not found! Showing Bhopal weather.");
            if (city.toLowerCase() !== "bhopal") {
                getWeather("bhopal");
            }
        });
};
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
getWeather("bhopal");

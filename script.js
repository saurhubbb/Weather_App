const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3307f7bb36mshfcede1f3cfdee75p1ff069jsnfe59d505180f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{

        cityName.innerHTML=city;

        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
                .then(response => response.json())
                .then(response => {
                
                cloud_pct.innerHTML = response.cloud_pct
                cloud_pct2.innerHTML = response.cloud_pct
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                feels_like.innerHTML = response.feels_like
                humidity.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp
                wind_speed.innerHTML = response.wind_speed
                wind2.innerHTML = response.wind_speed
                wind_degrees.innerHTML = response.wind_degrees
                sunrise.innerHTML = response.sunrise
                sunset.innerHTML = response.sunset

                

                if(response.temp>35){
                        tempBtn.innerHTML=`Hot Temperature <i class="fa-solid fa-temperature-three-quarters"></i>`;
                }else if(response.temp<15){
                        tempBtn.innerHTML=`Chilled Temperature <i class="fa-solid fa-temperature-three-quarters"></i>`;
                }else{
                        tempBtn.innerHTML=`Normal Temperature <i class="fa-solid fa-temperature-three-quarters"></i>`;
                }
                
                console.log(response)})
                .catch(err => console.error(err));
};
getWeather("Mumbai");
searchButton.addEventListener('click',(e) =>{
        if(city.value==""){
                e.preventDefault();
                getWeather(Mumbai);
        }else{
                e.preventDefault();
                getWeather(city.value);
        }
});


// London

const getLondon=(city)=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
                .then(response => response.json())
                .then(response => {

                        london_cloud_pct.innerHTML = response.cloud_pct
                        london_temp.innerHTML = response.temp
                        london_feels_like.innerHTML = response.feels_like
                        london_humidity.innerHTML = response.humidity
                        london_min_temp.innerHTML = response.min_temp
                        london_max_temp.innerHTML = response.max_temp
                        london_wind_speed.innerHTML = response.wind_speed
                        london_wind_degrees.innerHTML = response.wind_degrees
                        london_sunrise.innerHTML = response.sunrise
                        london_sunset.innerHTML = response.sunset

                        console.log(response)})
                        .catch(err => console.error(err));
};
getLondon("london");
//Dubai

const getDubai=(city)=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
                .then(response => response.json())
                .then(response => {

                        newyork_cloud_pct.innerHTML = response.cloud_pct
                        newyork_temp.innerHTML = response.temp
                        newyork_feels_like.innerHTML = response.feels_like
                        newyork_humidity.innerHTML = response.humidity
                        newyork_min_temp.innerHTML = response.min_temp
                        newyork_max_temp.innerHTML = response.max_temp
                        newyork_wind_speed.innerHTML = response.wind_speed
                        newyork_wind_degrees.innerHTML = response.wind_degrees
                        newyork_sunrise.innerHTML = response.sunrise
                        newyork_sunset.innerHTML = response.sunset


                        console.log(response)})
                        .catch(err => console.error(err));
};
getDubai("dubai");
//Mumbai

const getMumbai=(city)=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
                .then(response => response.json())
                .then(response => {

                        mum_cloud_pct.innerHTML = response.cloud_pct
                        mum_temp.innerHTML = response.temp
                        mum_feels_like.innerHTML = response.feels_like
                        mum_humidity.innerHTML = response.humidity
                        mum_min_temp.innerHTML = response.min_temp
                        mum_max_temp.innerHTML = response.max_temp
                        mum_wind_speed.innerHTML = response.wind_speed
                        mum_wind_degrees.innerHTML = response.wind_degrees
                        mum_sunrise.innerHTML = response.sunrise
                        mum_sunset.innerHTML = response.sunset

                        console.log(response)})
                        .catch(err => console.error(err));
};
getMumbai("mumbai");
//London

const getDelhi=(city)=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
                .then(response => response.json())
                .then(response => {

                        delhi_cloud_pct.innerHTML = response.cloud_pct
                        delhi_temp.innerHTML = response.temp
                        delhi_feels_like.innerHTML = response.feels_like
                        delhi_humidity.innerHTML = response.humidity
                        delhi_min_temp.innerHTML = response.min_temp
                        delhi_max_temp.innerHTML = response.max_temp
                        delhi_wind_speed.innerHTML = response.wind_speed
                        delhi_wind_degrees.innerHTML = response.wind_degrees
                        delhi_sunrise.innerHTML = response.sunrise
                        delhi_sunset.innerHTML = response.sunset

                        console.log(response)})
                        .catch(err => console.error(err));
};
getDelhi("delhi");
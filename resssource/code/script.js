const reqToServ = (place) => {
    let dataFetched = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=0608a5168843251f4918bd0d742c0e19&units=metric`)
    .then(response => response.json())
    .then(respJson => {
        return respJson
    })
    return dataFetched;
}





const search = () => {
    const searchBar = document.getElementById("search-bar");
    if (searchBar.value === "") {
        return;
    }

    document.getElementById("meteos").innerHTML = "";


    reqToServ(searchBar.value).then(rep => {

        let placeData = rep['city']

        let data = [];

        let dateForItem = 0;
        rep["list"].forEach(item => {
            console.log(item['dt_txt'])
            if (item["dt_txt"].substring(8, 10) !== dateForItem & (parseInt(item["dt_txt"].substring(11, 13)) >= 12)) {
                data.push(item)
                dateForItem = item["dt_txt"].substring(8, 10) 
            }
        })
    
        
    
        for (let i = 0; i < 5; i++) {
            
            let day_data = data[i]
            

            if (!day_data) {
                return
            }
    
            d = document.createElement('div')
            d.classList.add("day-meteo")
            d.innerHTML = `
                <div class="weather-box">
                    <div class="logo-container">
                        <img src="http://openweathermap.org/img/wn/${day_data["weather"][0]["icon"]}@2x.png"}>
                    </div>
                    <div class="information center">
                        <h1 classe="place">${placeData["name"]} ${placeData["country"]}</h1>
                        <div class="weather-information">
                        <h2 class="temp">Temperature: ${day_data["main"]["temp"]}°C</h2>
                        <h2>Day: ${day_data["dt_txt"]}</h2>
                        <!--other info-->
                    </div>
                </div>
            `
    
            document.getElementById("meteos").appendChild(d)
        }
    });

}

const searchButton = document.getElementById("search-button");




searchButton.addEventListener("click", search);


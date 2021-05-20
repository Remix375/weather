const dataExample = {
    "list": [
        {
            temp: 20,

            "icon": "10n"
            
        }
    ]




}



const reqToServ = (place) => {
    let dataFetched = fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=0608a5168843251f4918bd0d742c0e19&units=metric`)
    .then(response => response.json())
    .then(respJson => {
        console.log(respJson.cod)
        let retList = []
        respJson["list"].forEach(item => {
            retList.push({
                temp: item["main"]["temp"],
                icon: item["weather"][0]["icon"],
                day: item["dt_txt"]
            })
        })
        console.log(retList)
        return retList
    })
    return dataFetched;
}





const search = () => {
    const searchBar = document.getElementById("search-bar");
    const meteo = document.getElementById("meteos");

    /*
        autres variables pour conditions
    */


    // function that calls to api
    //const data = dataExample["list"]


    reqToServ("paris").then(rep => {
        let ancestor = document.getElementById('meteos')
        let descendents = ancestor.getElementsByClassName('day-meteo');
        //let data = rep;
        //console.log("data", data)
        //meteo.innerHTML = "";
        let heu = "hey"
        console.log(heu[1])

        let data = [];

        let dateForItem = 0;
        rep.forEach(item => {
            if (item["day"].substring(8, 10) !== dateForItem & (parseInt(item["day"].substring(11, 13)) >= 12)) {
                console.log(item["day"].substring(8, 10))
                data.push(item)
                dateForItem = item["day"].substring(8, 10) 
            }
        })
    
    
        for (let i = 0; i < 5/*/descendents.length*/; i++) {
            



            let element = descendents[i]
            let day_data = data[i]
    
            if (!day_data) {
                return
            }
            console.log(descendents)
    
            d = document.createElement('div')
            d.classList.add("day-meteo")
            d.innerHTML = `
                <div class="weather-box">
                    <div class="logo-container">
                        <img src="http://openweathermap.org/img/wn/${day_data["icon"]}@2x.png"}>
                    </div>
                    <div class="information center">
                        <h1 classe="place">Paris</h1>
                        <div class="weather-information">
                        <h2 class="temp">Temperature: ${day_data["temp"]}</h2>
                        <h2>Day: ${day_data["day"]}</h2>
                        <!--other info-->
                    </div>
                </div>
            `
    
            document.getElementById("meteos").appendChild(d)
            console.log(d)
    
    
            console.log(element)
    
            //descendents.appendChild(element)
        }










    });
    

    let ancestor = document.getElementById('meteos')
    let descendents = ancestor.getElementsByClassName('day-meteo');

    console.log("data", data)
    //meteo.innerHTML = "";


    for (let i = 0; i < descendents.length; i++) {
        let element = descendents[i]
        let day_data = data[i]

        if (!day_data) {
            return
        }
        console.log(descendents)

        d = document.createElement('div')
        d.classList.add("day-meteo")
        d.innerHTML = `
            <div class="weather-box">
                <div class="logo-container">
                    <img src="http://openweathermap.org/img/wn/${day_data["icon"]}@2x.png"}>
                </div>
                <div class="information center">
                    <h1 classe="place">Paris</h1>
                    <div class="weather-information">
                    <h2 class="temp">${day_data["temp"]}</h2>
                    <!--other info-->
                </div>
            </div>
        `

        document.getElementById("meteos").appendChild(d)
        console.log(d)


        console.log(element)

        //descendents.appendChild(element)
    }
    

}


search()
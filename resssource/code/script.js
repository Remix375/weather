const dataExample = {
    "list": [
        {
            "main": {
                temp: 20
            },
            "weather": {
                id: "500",
                "icon": "10n"
            }
        }




    ]




}


const search = () => {
    const searchBar = document.getElementById("search-bar");
    const meteo = document.getElementById("meteos");

    /*
        autres variables pour conditions
    */


    // function that calls to api
    const data = dataExample["list"]
    let ancestor = document.getElementById('meteos')
    let descendents = ancestor.getElementsByClassName('day-meteo');


    //meteo.innerHTML = "";


    for (let i = 0; i < descendents.length; i++) {
        let element = descendents[i]
        let day_data = data[i]

        if (!day_data) {
            return
        }
        console.log(descendents)
        element.getElementsByClassName("logo").src = `http://openweathermap.org/img/wn/${day_data["weather"]["icon"]}@2x.png`

        d = document.createElement('div')
        d.classList.add("day-meteo")
        d.innerHTML = `
            <div class="logo-container center">
                <img src="./resssource/images/logo.png">
            </div>
            <div class="information center">
                <h1 classe="place">Paris</h1>
                <div class="weather-information">
                <h2 class="temp">32</h2>
                <!--other info-->
            </div>
        `
        document.getElementById("meteos").appendChild(d)
        console.log(d)


        console.log(element)

        //descendents.appendChild(element)
    }
    

}


search()
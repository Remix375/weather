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
    /*
        autres variables pour conditions
    */


    // function that calls to api
    const data = dataExample
    let ancestor = document.getElementById('meteos')
    let descendents = ancestor.getElementsByTagName('*');


    for (let i = 0; i < descendents.length; i++) {
        let e = descendents[i]

        





    }
    

}


search()
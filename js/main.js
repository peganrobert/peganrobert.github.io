function getData() {
    let name=document.querySelector("#nevInput").value;
    let email=document.querySelector("#emailInput").value;
    let address=document.querySelector("#cimInput").value;
    let adatok= {name, email, address};

    console.log(adatok);


}

//function weatherGetData() {
  //  let wdata= api.openweathermap.org/data/2.5/weather?id=833&appid=4aa135b0e1540e82d5638e2af7d04fc3;
   // console.log(wdata);
//}

function getServerData(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}

function startGetData() {
    getServerData("http://api.openweathermap.org/data/2.5/weather?id=3054638&appid=4aa135b0e1540e82d5638e2af7d04fc3").then(
    data => startGetSpecData(data))
}

// document.querySelector("#getDataBtn").addEventListener("click", startGetData);

function startGetSpecData(data) {
    let text=""
    let maindata={}
    let maxHomerseklet
    for (let i in data){
        if (i=="name"){
        text=data[i];
    }
    for (let i in data){
        if (i=="main") {
            maindata=data[i];
            for (let ii in maindata) {
                if (ii=="temp_max") {
                    maxHomerseklet=parseInt(maindata[ii]-272)
                }
            }
        }
    }
    
}
document.getElementById("idojaras").innerHTML=text + " mai várható legmagasabb hőmérséklete: " + maxHomerseklet +"ºC"
document.getElementById("getDataBtn").style.display="none"
    
}


/*
function startGetSpecData(data) {
    let text={}
    let tomb={}
    for (let i in data){
        if (i=="name"){
        text=data[i];
            for (let ii in text){
                tomb=text[ii];
            console.log(tomb)  
            console.log(ii);
        };
        console.log(text);
        console.log(i);
            }
                
    }
    */
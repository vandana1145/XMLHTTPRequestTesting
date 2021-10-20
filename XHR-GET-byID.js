let XMLHttpRequest = require("xhr2");
let xhr = new XMLHttpRequest();
let url = "http://localhost:8282/customers";


// GET method by id
xhr.open("GET", `${url}/2000`)
xhr.setRequestHeader("Accept", "application/json");

xhr.onload = () => {
    if(xhr.status === 200){
        console.log(JSON.parse(xhr.response))
    }
    else{
        console.log(`error ${xhr.status}`)
    }
}

xhr.send();
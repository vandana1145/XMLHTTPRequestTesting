// console.log(window)

var XMLHttpRequest = require('xhr2');
const request = new XMLHttpRequest();
request.open("GET", "http://localhost:8282/customers");
request.send();

request.onload = () => {
    console.log(request.response)
    if(request.status === 200){
        console.log(JSON.parse(request.response))
    }
    else{
        console.log(`error ${request.status}`)
    }
} 
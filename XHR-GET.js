// console.log(window)

var XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
let url = "http://localhost:8282/customers";

// GET method
xhr.open("GET", url);

xhr.onload = () => {
    if(xhr.status === 200){
        console.log(JSON.parse(xhr.response))
    }
    else{
        console.log(`error ${xhr.status}`)
    }
} 

xhr.send();

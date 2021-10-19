console.log(window)

const request = new XMLHttpRequest();
request.open("GET", "http://localhost:8282/cutomers");
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
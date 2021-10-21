const http = require("http");

const data = new TextEncoder().encode(
    JSON.stringify(
        {
            "transaction_type": "withdrawal",
            "amount": 3000
        }
    )
)

const options = {
    hostname: 'localhost',
    port: 8282,
    path: '/customers/2001/account/95474',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, res => {
    console.log(`statuscode: ${res.statusCode}`)

    var response = '';

    res.on('data', function(d) {
        response += d;
    });
    res.on('end', function(d) {
        console.log(response);
    });
    })

    req.on('error', error => {
        console.error(error)
    });

    req.write(data);
    req.end();

async function invokeAPI() {
    try {
        const res = await fetch('https://unxmpqb86h.execute-api.us-east-1.amazonaws.com/dev/lambda-tooldr');
        const json = await res.json();
        return json;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}

function ping() {
    console.log("this is just the message")
    console.log(process.env['ENDPOINT'])
}

invokeAPI()
    .then(result => {
        console.log(result.body.message);
    }).then(() => {
        ping()
    })

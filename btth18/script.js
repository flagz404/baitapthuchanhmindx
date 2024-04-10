const api1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";

const api2 = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";

function click1() {
    let dt = fetch(api1)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Success", data.detail);
    });
    console.log(dt);
}
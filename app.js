var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=y-8opUVcqOFM1BCk_aMaqN7mZ0IpUxm90jmVoRwQbFE";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      let data = JSON.parse(request.response);
        console.log(data);
        let addCard = "";
        data.data.forEach(function (plant) {
            console.log(plant);
            addCard += `<div class="plant">
                      <h1>${plant.common_name}</h1>
                      <p>Common Name: ${plant.family_common_name}</p>
                      <p>Scientific Name:${plant.scientific_name}</p>
                      <p>Year:${plant.year}</p>
                      <p>Family: ${plant.family}</p>
                      <p>Genus:${plant.genus}</p>
                      <p>Bibliography: ${plant.bibliography}</p>
                      <div class="image">
                      <img style="width: 20%;" src="${plant.image_url}" alt="plants" class="center">
                      <br>
                      </div>
                    </div>`;
        });
        document.getElementById("plant").innerHTML = addCard;
        img.style.margin = "0 auto";
    })
);




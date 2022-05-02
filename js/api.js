/* 


Denne koden henter inn EN person fra API'et til randomuser


*/

// const url = "https://randomuser.me/api";
// const container = document.querySelector(".container");

// async function getApi() {
//     const response = await fetch(url);
//     const svar = await response.json();

//     console.log(svar.results[0]);

//     container.innerHTML = `

//     <div>
//         <img src=${svar.results[0].picture.large} height="200"/>
//         <h1>${svar.results[0].name.first} ${svar.results[0].name.last}</h1>
//         <h3>${svar.results[0].email}</h3>
//     </div>

//     `;
// }

// getApi();

/* 


Hente ut 10 personer fra API'et til nokeynoshade 


*/

// const url = "http://www.nokeynoshade.party/api/queens?limit=50";

// const resultContainer = document.querySelector(".container");

// async function getProducts() {
//     const response = await fetch(url);
//     const svar = await response.json();

//     console.log(svar);

//     resultContainer.innerHTML = "";

//     for (let i = 0; i < 5; i++) {
//         console.log(svar[i].name);
//         resultContainer.innerHTML += `
//         <img src="${svar[i].image_url}" height="200" alt="" />
//         <h1>${svar[i].name}</h1>
//         <p>${svar[i].quote}</p>
//         `;
//     }
// }

// getProducts();

/* 


Hente værdata


*/

// const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
// const container = document.querySelector(".container");

// async function getWeather() {
//     const options = {
//         method: "GET",
//         headers: {
//             "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//             "X-RapidAPI-Key": "98a5e49f30msha8b2d70bc935f19p1f04dajsn69f5b50a1ff4",
//         },
//     };

//     const response = await fetch(url, options);
//     const svar = await response.json();

//     console.log(svar);

//     container.innerHTML = `

//     <h1>${svar.location.name}</h1>
//     <div class="flex">
//     <span>${svar.current.temp_c}&deg;C</span>
//     <img src=${svar.current.condition.icon} height="100"/>
//     <span>Føles som ${svar.current.feelslike_c}&deg;C</span>

//     </div>

//     `;
// }

// getWeather();

/*

Hente værdata med søkefelt

*/

const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
const container = document.querySelector(".results");

const rapidApiHost = "weatherapi-com.p.rapidapi.com";
const rapidApiKey = "98a5e49f30msha8b2d70bc935f19p1f04dajsn69f5b50a1ff4";


const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": rapidApiHost,
        "X-RapidAPI-Key": rapidApiKey,
    },
};

function inputChange(event) {
    const cityCheck = document.querySelector("#city-search").value;
    console.log(cityCheck);

    async function getWeather() {
        const response = await fetch(url + cityCheck, options);
        const results = await response.json();    
        
        function windSpeedConverer (kph){
            return (kph * 1000) / 3600;
        }

        const getKph = results.current.wind_kph;
        const KphToMps = windSpeedConverer(getKph).toFixed(0);

        console.log(results);

        container.innerHTML = `
        <div class="result">
            <h1>${results.location.name}</h1>
            <p><img src="${results.current.condition.icon}" height="20" alt="Image of ${results.current.condition.text} weather"></p>
            <h2>${results.current.condition.text}</h2>
            <p>${results.current.temp_c}&deg;C</p>
            <p>${results.current.wind_kph} km/t (${KphToMps} m/s) ${results.current.wind_dir}</p>
            <p>${results.current.humidity} % luftfuktighet</p>
            <p>${results.current.pressure_mb} hPa</p>
            <p>UV ${results.current.uv}</p>
            <p>Sist oppdatert ${results.current.last_updated}</p>
        
        </div>`;
    }
    getWeather()
}   

    const appearField = document.querySelector("#timer");

    setTimeout(() => {
        appearField.innerHTML = "Har du husket å skrive inn en by?";    
    }, "5000");

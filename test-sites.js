const https = require("https");

const sites = ["https://www.google.com", "https://www.youtube.com", "https://www.example.com"];

sites.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url} -> Status Code: ${res.statusCode}`);
  }).on("error", (err) => {
    console.error(`${url} -> Error: ${err.message}`);
  });
});

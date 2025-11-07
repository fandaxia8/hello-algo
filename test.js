const https = require("https");

https.get("https://ifconfig.me", (res) => {
  let data = "";
  res.on("data", chunk => data += chunk);
  res.on("end", () => {
    console.log("Public IP:", data.trim());
  });
}).on("error", (err) => {
  console.error("Error:", err.message);
});

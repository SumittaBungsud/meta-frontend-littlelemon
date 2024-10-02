const axios = require("axios");

axios
  .get("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
  .then((res) => {
    console.log(res.data);
  });

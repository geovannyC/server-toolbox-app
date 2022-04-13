const axios = require("axios");

const BASE_URL = "https://echo-serv.tbxnet.com/v1";

const getFiles = (key) =>
  axios({
    method: "GET",
    url: BASE_URL + `/secret/files`,
    headers: {
      "Content-Type": "application/json",
      authorization: key,
    },
  });

module.exports = {
    getFiles,
};
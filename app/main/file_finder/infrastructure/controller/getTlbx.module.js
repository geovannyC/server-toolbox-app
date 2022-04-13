const axios = require("axios");

const BASE_URL = "https://echo-serv.tbxnet.com/v1";
const getFileByNameAx = (key, name) =>
  axios({
    method: "GET",
    url: BASE_URL + `/secret/file/${name}`,
    headers: {
      "Content-Type": "application/json",
      authorization: key,
    },
  });
  module.exports={
    getFileByNameAx
  }
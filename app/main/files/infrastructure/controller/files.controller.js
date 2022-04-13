("use strict");

const req_modules = require("./getTlbx.module");
const test = (req, res) => {
  return res.status(200).json("test");
};
const getFiles = async (req, res) => {
  const key = process.env.SECRET_KEY;
  const getAllFiles = await req_modules.getFiles(key);
  const format = {
    message: "ok",
    data: getAllFiles.data.files,
  };
  if (getAllFiles.status === 200) {
    res.format({
      "application/json": () => {
        res.status(200);
        res.json(format);
      },
    });
  } else {
    res.format({
      "application/json": () => {
        res.status(404);
        res.json("error");
      },
    });
  }
};

module.exports = {
  getFiles,
  test
};

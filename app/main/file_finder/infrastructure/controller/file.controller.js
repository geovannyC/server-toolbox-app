("use strict");
const req_modules = require("./getTlbx.module"),
  file_builder = require("./builder");
const test = (req, res) => {
  return res.status(200).json("test");
};

const getFileByName = async (req, res) => {
  const key = process.env.SECRET_KEY;
  const name = req.query.fileName;
  await req_modules
    .getFileByNameAx(key, name)
    .then(async (element) => {
      if (!element.status === 200) {
        res.format({
          "application/json": () => {
            res.status(404);
            res.json("error");
          },
        });
      } else {
        const file_builder_fn = await file_builder.shemma_builder(
          element.data,
          name
        );
        res.format({
          "application/json": () => {
            res.status(200);
            res.json(file_builder_fn);
          },
        });
      }
    })
    .catch((e) => {
      res.format({
        "application/json": () => {
          res.status(404);
          res.json("error");
        },
      });
    });
};
module.exports = {
  test,
  getFileByName,
};

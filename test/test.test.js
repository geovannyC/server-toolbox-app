
const chai = require("chai"),
  request = require("supertest");

  const params = require("./examples.format")
const app = require("../app/app"),
  file_finder_ax_module = require("../app/main/file_finder/infrastructure/controller/getTlbx.module"),
  file_builder = require("../app/main/file_finder/infrastructure/controller/builder"),
  files_ax_module = require("../app/main/files/infrastructure/controller/getTlbx.module");
describe("test", () => {
  it("test mocha chai", function () {
    chai.assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
describe("GET infrastructure ", () => {
  it("responds with json file_finder", function (done) {
    request(app)
      .get("/file-controler-app-test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("responds with json file", function (done) {
    request(app)
      .get("/files-app-test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
describe("Testing Request to external API modules", () => {
  it("should to call external api secret/files and get all files in files,  files axios module", async () => {
    const key = process.env.SECRET_KEY;
    const getFiles = await files_ax_module.getFiles(key);
    chai.expect(getFiles.data).to.be.a("object");
  });
  it("should to call external api secret/file/{name} and get specific file, file_finder axios module", async () => {
    const key = process.env.SECRET_KEY;
    const getFile = await file_finder_ax_module.getFileByNameAx(key,"test2.csv");
    chai.expect(getFile.data).to.be.a("string");
  });
});
describe("Testing GET routes", () => {
  it("/files/list should to return 200 status code with the all files of the external api ", function (done) {
    request(app)
      .get("/files/list")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("/files/data?fileName should to return 200 status code with the content of the specific file of the external api ", function (done) {
    request(app)
      .get("/files/data?fileName=test6.csv")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("/files/data?fileName should to return 404 searching the wrong filename", function () {
    request(app)
      .get("/files/data?fileName=example")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404);
  });
});
describe ("Test builders",()=>{
  it('should to build a shemma', async() => {
    const txt = params.input_value_schemma_builder
    const file_builder_fn = await file_builder.shemma_builder(txt,"test9.csv")
    
    chai.assert.isObject(file_builder_fn)
  })
  it('should to check a invalid line', async() => {
    const txtfalse = params.input_value_filter_valid_lines
    const txttrue = params.input_value_2_filter_valid_lines
    const file_builfer_false_fn = await file_builder.filter_valid_lines(txtfalse,"test9.csv")
    const file_builfer_true_fn = await file_builder.filter_valid_lines(txttrue, "test9.csv")
    chai.assert.isFalse(file_builfer_false_fn)
    chai.assert.isObject(file_builfer_true_fn)
  });
})
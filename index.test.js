const htmlToXpath = require("./index.js");

test("Should raise error when arguement is not HTMLElement", () => {
  expect(() => htmlToXpath("a")).toThrow(Error);
});

test("Should raise error when arguement is an HTMLElement NOT in visible DOM", () => {
  const danglingElement = document.createElement("a");
  expect(() => htmlToXpath(danglingElement)).toThrow(Error);
});

test("Should return correct xpath if selected body", () => {

});

test("Should return correct xpath if selected a child node", () => {

});

test("Should return correct xpath if selected deeply nested child node", () => {

});

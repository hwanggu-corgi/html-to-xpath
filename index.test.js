const htmlToXpath = require("./index.js");
const {
  JSDOM
} = require("jsdom");

beforeAll(() => {
  const rawHTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>HTML 5 Boilerplate</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header class="headerElement">
        <nav>
          <ul>
            <li>hi</li>
            <li>hello</li>
          </ul>
        </nav>
      </header>
      <main class="mainElement">
        <ul>
          <li>
            <span>hi</span>
            <ul>
              <li>nested</li>
              <li class="testElementNested">nested 2</li>
            </ul>
          </li>
          <li>hello</li>
        </ul>
      </main>
      <script src="index.js"></script>
    </body>
  </html>`;
  const dom =  new JSDOM(rawHTML);
})


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
x
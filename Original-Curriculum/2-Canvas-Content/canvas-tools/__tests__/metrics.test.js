const Metrics = require("../tools/Metrics.js");

const fs = require("fs");
jest.mock("fs");
fs.readFileSync.mockReturnValue(`
## page title
text
![alt text](fakeimage.png)
text
> **Asset Needed:** http://jira.com/FSFO-1111
text
> **Pause:** Question
> **Answer:** Answer
text
![more alt text](fakeimage2.gif)
text
> **DEEP DIVE** here's the thing about that...
text
> **Deep Dive:** read the docs
text
> **Rewind:** 'Member this?
> \`\`\`js
> // this does a thing
> document.getElementById("wrapper").textContent = "hello";
> \`\`\`
closing statement
`);

test("constructor() reads file", () => {
  const metrics = new Metrics("");

  expect(fs.readFileSync).toHaveBeenCalled();
  expect(metrics.content).toContain("## page title");
});

test("getWordCount() returns correct number", () => {
  const metrics = new Metrics("");
  const obj = metrics.getWordCount();

  expect(obj).toHaveProperty("words", 33);
  expect(obj).toHaveProperty("code", 2);
});

test("getImageCount() returns object with correct values", () => {
  const metrics = new Metrics("");
  const obj = metrics.getImageCount();

  expect(obj).toHaveProperty("count", 2);
  expect(obj).toHaveProperty("gifs", 1);
});

test("getCallouts() returns object with counted values", () => {
  const metrics = new Metrics("");
  const obj = metrics.getCallouts();

  expect(obj).toHaveProperty("pause", 1);
  expect(obj).toHaveProperty("deep dive", 2);
  expect(obj).not.toHaveProperty("answer");
  expect(obj).not.toHaveProperty("asset needed");
});

test("getNeededAssets() returns array of values", () => {
  const metrics = new Metrics("");

  expect(metrics.getNeededAssets()).toEqual(
    expect.arrayContaining(["http://jira.com/FSFO-1111"])
  );
});
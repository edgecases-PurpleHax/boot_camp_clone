const Markup = require("../tools/Markup.js");

const fs = require("fs");
jest.mock("fs");
fs.readFileSync.mockReturnValue(`
# test content
## subheader
![alt](./fakeimage.jpg#left)

three dots... [link with dots](https://mdn.com/try...catch)

!assessment:xo48yy3pM88M1Dww6dxeebkn

!video: oop-explained

![](./folder/fakeimage.gif)

> **Pro Tip:** real tips

!video:1.5-hover-demo

asdfsadf asdf, [watch this video](http://youtu.be/-wtIMTCHWuI)

> regular blockquote with some **bold**
adsfasdfdasfda

### normally an h3

\`\`\`html
<h3>code sample</h3>
\`\`\`

#### normally an h4
`);

test("constructor() reads file and converts to HTML", () => {
  const markup = new Markup("");

  expect(fs.readFileSync).toHaveBeenCalled();

  // callout formatting
  expect(markup.html).toContain('class="callout pro-tip"');
  expect(markup.html.match(/callout/g).length).toBe(1);

  // image formatting
  expect(markup.html).toContain('src="./fakeimage.jpg" class="image-left" alt=');
  expect(markup.html).toContain('src="./folder/fakeimage.gif" alt=');
  
  // link formatting
  expect(markup.html).toContain('class="inline_disabled" href="http://youtu.be/-wtIMTCHWuI"');

  // ellipsis…
  expect(markup.html).toContain('href="https://mdn.com/try...catch"');
  expect(markup.html).toContain('three dots…');
});

test("getAssessments() returns array of assessment IDs", () => {
  const markup = new Markup("");

  expect(markup.getAssessments()).toEqual(
    expect.arrayContaining(["xo48yy3pM88M1Dww6dxeebkn"])
  );
});

test("getImages() returns array of image paths", () => {
  const markup = new Markup("");

  expect(markup.getImages()).toEqual(
    expect.arrayContaining(["./fakeimage.jpg", "./folder/fakeimage.gif"])
  );
});

test("getVideos() returns array of video names", () => {
  const markup = new Markup("");

  expect(markup.getVideos()).toEqual(
    expect.arrayContaining(["oop-explained", "1.5-hover-demo"])
  );
});

test("insertImage() replaces text/image src", () => {
  const markup = new Markup("");

  expect(markup.insertImage("fakeimage.jpg", "realimage.jpg")).toBeTruthy();
  expect(markup.html).toContain("realimage.jpg");
  expect(markup.insertImage("fake2.gif", "realimage2.gif")).toBeFalsy();
});

test("insertAssessment() replaces assessment ID with iframe", () => {
  const markup = new Markup("");

  expect(markup.insertAssessment("xo48yy3pM88M1Dww6dxeebkn", "http://test.quiz.url")).toBeTruthy();
  expect(markup.html).toContain("<iframe");
  expect(markup.html).toContain('src="http://test.quiz.url"');
});

test("insertVideo() replaces video name with iframe", () => {
  const markup = new Markup("");

  expect(markup.insertVideo("oop-explained", "http://test.video.url")).toBeTruthy();
  expect(markup.html).toContain("<iframe");
  expect(markup.html).toContain('src="http://test.video.url"');
});

test("getTitle() returns a string", () => {
  const markup = new Markup("");

  expect(markup.getTitle()).toBe("test content");
});

test("getPageChunks() returns a new array of objects", () => {
  const markup = new Markup("");
  const backup = markup.html;

  expect(markup.getPageChunks()).toContainEqual(
    expect.objectContaining({ 
      title: expect.stringContaining("subheader"),
      body: expect.stringContaining("<h2")
    })
  );
  
  expect(markup.html).toEqual(backup);
});
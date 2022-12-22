const Canvas = require("../tools/Canvas.js");

test("getAssignmentId() returns correct ID", async () => {
  const canvas = new Canvas();
  const data = await canvas.getAssignmentId("Test Assignment 1");

  expect(data).toBe(12345);
});

test("formatPageTitle() returns correct URL string", () => {
  const canvas = new Canvas();

  expect(canvas.formatPageTitle("5.2.1: Create an Add-On")).toBe("5-dot-2-1-create-an-add-on");

  expect(canvas.formatPageTitle("10.3.3: Build Player’s Health")).toBe("10-dot-3-3-build-players-health");

  expect(canvas.formatPageTitle("11.1.4: Create an Express.js Server")).toBe("11-dot-1-4-create-an-express-dot-js-server");
});
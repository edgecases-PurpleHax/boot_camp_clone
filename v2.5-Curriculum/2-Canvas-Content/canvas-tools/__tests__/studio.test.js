const Studio = require("../tools/Studio.js");

test("constructor() sets up base URL", async () => {
  const studio = new Studio("instructuremedia.com/api");

  expect(studio.apiBaseUrl).toBe("instructuremedia.com/api");
});

test("getCredentials() gets token and ID from API", async () => {
  const studio = new Studio("instructuremedia.com/api");

  await studio.getCredentials("test@test.com", "mypassword");

  expect(studio.authHeader).toEqual(
    expect.objectContaining({
      headers: expect.objectContaining({
        Authorization: expect.stringContaining("one-time-session-token")
      })
    })
  );
});

test("getVideoUrl() returns URL string", async () => {
  const studio = new Studio("instructuremedia.com/api");
  await studio.getCredentials("test@test.com", "mypassword");

  const data = await studio.getVideoUrl("video-name");

  expect(data).toEqual(expect.stringContaining("f9f57389-9283-47e5-bbaa-c87a3778f91c-278"));
});
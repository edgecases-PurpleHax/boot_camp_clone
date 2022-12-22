// fake calling canvas module api
exports.get = (url) => {
  let data;

  if (url.indexOf("/assignments") !== -1) {
    data = [
      {
        id: 12345,
        name: "Test Assignment 1"
      },
      {
        id: 67890,
        name: "Test Assignment 2"
      }
    ];
  }
  else if (url.indexOf("/perspectives") !== -1) {
    data = {
      perspectives: [
        {
          media: {
            lti_launch_id: "f9f57389-9283-47e5-bbaa-c87a3778f91c-278"
          }
        }
      ]
    };
  }
  
  return Promise.resolve({data});
};

exports.post = (url) => {
  let data;

  if (url.indexOf("/auth/session") !== -1) {
    data = {
      session: {
        token: "one-time-session-token",
        user: {
          id: 17
        }
      }
    };
  }
  
  return Promise.resolve({data});
};
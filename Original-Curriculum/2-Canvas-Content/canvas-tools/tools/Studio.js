const axios = require("axios");

module.exports = class Studio {

  constructor(apiUrl) {
    this.apiBaseUrl = apiUrl;
    this.authHeader = {};
  }

  async getCredentials(email, password) {
    const {data} = await axios.post(`${this.apiBaseUrl}/auth/session`, {
      email, password
    });

    this.authHeader = {
      headers: {
        Authorization: `Bearer user_id="${data.session.user.id}", token="${data.session.token}"`
      }
    };
  }

  async getVideoUrl(query) {
    const url = `${this.apiBaseUrl}/media_management/perspectives/search?query=${query}`;

    const {data} = await axios.get(url, this.authHeader);

    if (data.perspectives[0]) {
      return `${this.apiBaseUrl.replace("/api", "")}/lti/launch?custom_arc_launch_type=bare_embed&custom_arc_media_id=${data.perspectives[0].media.lti_launch_id}`;
    }
    
    return null;
  }
}

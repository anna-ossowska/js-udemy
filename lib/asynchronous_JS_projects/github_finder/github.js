/* eslint-disable no-unused-vars */
class Github {
  constructor() {
    this.client_id = '727dabeb6b6e338284d3';
    this.client_secret = ' 86b9c94fa5f544d3e4e76b3ddca8c966e5290c2b';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}

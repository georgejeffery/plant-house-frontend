URL = "http://10.218.5.22:3000/api/v1/";

export default class API {
  static get(endpoint) {
    return fetch(URL + endpoint).then(resp => resp.json());
  }

  static getUser(id) {
    return fetch(URL + `users/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(response => response.json());
  }

  static createUser(userFields) {
    const query = `users`;
    return fetch(URL + query, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userFields)
    }).then(response => response.json());
  };

  static searchPlants(searchTerms) {
    const query = `plants/search?flowers=${searchTerms.flowers}&humidity=${
      searchTerms.humidity
    }&light=${searchTerms.light}`;
    return this.get(query);
  }

  static createRoom(room) {
    return fetch(URL + "rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" 
                },
      body: JSON.stringify(room)
    }).then(resp => resp.json());
  }

  static authorise(user) {
    return fetch(URL + "authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(token => {
        localStorage.setItem("token", token.auth_token);
        return token.user_id;
      });
  }
};

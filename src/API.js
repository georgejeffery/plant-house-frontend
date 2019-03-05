URL = "http://localhost:3000/api/v1/";

export default class API {
  static get(endpoint) {
    // debugger
    return fetch(URL + endpoint).then(resp => resp.json());
  }

  static searchPlants(searchTerms) {
    const query = `plants/search?flowers=${searchTerms.flower}&humidity=${
      searchTerms.humidity
    }&light=${searchTerms.light}`;
    return this.get(query);
  }

  static getUser(id) {
    const query = `users/${id}`;
    return this.get(query);
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
  }
}

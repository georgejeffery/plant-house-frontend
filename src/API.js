URL = "http://10.218.5.22:3000/api/v1/";

export default class API {

  static get(endpoint){
    return fetch(URL + endpoint)
            .then(resp => resp.json())
};  
  
  static getUser(id) {
    const query = `users/${id}`;
    return this.get(query);
  };

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
<<<<<<< HEAD

    static searchPlants (searchTerms) {
        const query = `plants/search?flowers=${searchTerms.flowers}&humidity=${searchTerms.humidity}&light=${searchTerms.light}`
        return this.get(query)
    };

    static createRoom (room) {
        return fetch(URL+'users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(room)
        }).then(resp => resp.json())
    };

};
=======

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

  static createRoom(room) {
    return fetch(URL + "users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(room)
    }).then(resp => resp.json());
  }
}
>>>>>>> george

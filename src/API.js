export default class API {
    URL = 'http://10.218.5.4:3000/api/v1/'


    static get(endpoint){
        return fetch(URL + endpoint)
                .then(resp => resp.json())
    };

    static searchPlants (searchTerms) {
        const query = `plants/search?flowers=${searchTerms.flowers}&humidity=${searchTerms.humidity}&light=${searchTerms.light}`
        return this.get(query)
    };
};
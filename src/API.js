URL = 'http://10.218.1.160:3000/api/v1/'

export default class API {

    static get(endpoint){
        // debugger
        return fetch(URL + endpoint)
                .then(resp => resp.json())
    };

    static searchPlants (searchTerms) {
        const query = `plants/search?flowers=${searchTerms.flower}&humidity=${searchTerms.humidity}&light=${searchTerms.light}`
        return this.get(query)
    };
};
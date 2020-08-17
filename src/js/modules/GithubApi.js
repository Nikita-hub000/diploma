export default class GithubApi{
    constructor(options) {
        this.url = options.baseUrl;
        this.getCardsCommits()
    }

    getCardsCommits() {
        return fetch(`${this.url}/commits`, {
                method: "GET",
                headers: this.headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
            .catch(x => {
                x ="Error"
                console.log("Error")
            })
    }
}
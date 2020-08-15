
export default class NewsApi {
  constructor(options, body) {
      this.url = options.baseUrl;
      this.apiKey = '071e7d98f5164693bd3f576b8d54a51f';
      this.from = '2020-08-01';
      this.headers = options.headers;
      this.request = null;
      this.searchBar = document.querySelector('.field'); // инпут
      this.body = body;
  }

  getNews() {
      this.request = this.searchBar.value
      return fetch(`${this.url}q=${this.request}&pageSize=100&from=2020-08-01&language=ru&apiKey=${this.apiKey}`, {
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
  }

}
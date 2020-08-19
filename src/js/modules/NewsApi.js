
export default class NewsApi {
  constructor(options, body, from, apiKey) {
      this.url = options.baseUrl;
      this.apiKey = apiKey;
      this.headers = options.headers;
      this.request = null;
      this.body = body;
      this.from = from
      console.log('ccc')
  }

  getNews(){
      console.log('gg')
      this.request = document.querySelector('.field').value
      return fetch(`${this.url}q=${this.request}&pageSize=100&${this.from}&language=ru&apiKey=${this.apiKey}`, {
              method: "GET",
              headers: this.headers,
          })
          .then(res => {
              if (res.ok) {
                  return res.json()
              } else {
                  return Promise.reject(`Произошла ошибка: ${res.status}`)
              }
          })
  }

}
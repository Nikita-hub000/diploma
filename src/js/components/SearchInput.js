export default class SearchInput{
    constructor(list, body, newsApi, searchButton, newsListFunction, notNews, finding, result, button, more_button){
        this.button = button
        this.more_button = more_button
        this.button.addEventListener('submit', this.submitNews)
        this.more_button.addEventListener('click', this.moreNews)
        this.list = list
        this.notNews = notNews
        this.finding = finding
        this.result = result
        this.body = body
        this.newsApi = newsApi
        this.searchButton = searchButton
        this.newsListFunction = newsListFunction
    }
    submitNews(event){
        event.preventDefault();
        this.result.style.display = 'none'
        this.notNews.style.display = 'none'
        this.list.innerHTML = ''
        this.finding.style.display = 'flex'
        this.newsListFunction.render()
        localStorage.setItem('searchQuery', this.searchButton.value)
    }
    moreNews(){
        console.log('d')
        this.finding.style.display = "flex";
        this.newsCardList.save()
        this.finding.style.display = "none";
    }  
}
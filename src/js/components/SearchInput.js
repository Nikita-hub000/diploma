import { LIST, BAR } from "../constants/const"
import {list} from '../../index'
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
        console.log('qqqqqq')
    }
    submitNews(){
        event.preventDefault();
        document.querySelector('.news').style.display = 'none'
        document.querySelector('.error').style.display = 'none'
        localStorage.removeItem('searchQuery') 
        LIST.innerHTML = ''
        document.querySelector('.preloader').style.display = 'flex'
        list.render()
        localStorage.setItem('searchQuery', BAR.value)
    }
    moreNews(){
        console.log('d')
        document.querySelector('.preloader').style.display = "flex";
        list.save()
        document.querySelector('.preloader').style.display = "none";
    }  
}
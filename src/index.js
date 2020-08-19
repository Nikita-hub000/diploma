import "../src/pages/index.css";
import NewsCard from './js/components/NewsCard'
import  NewsCardList  from "./js/components/NewsCardList";
import NewsApi from './js/modules/NewsApi'
import SearchInput from './js/components/SearchInput';
import { LIST, BODY, RESULT, PRELOADER, NOT_FOUND, BAR ,SEARCH, NEWS, DATE } from "./js/constants/const.js";
  const MORE_BUTTON = NEWS.querySelector('.news__button') 
  const API_URL = 'https://nomoreparties.co/news/v2/everything?';
  const checkDate = `${DATE.getFullYear()}-${DATE.getMonth()+1}-${DATE.getDate()-7}`;
  const apiKey = '071e7d98f5164693bd3f576b8d54a51f'
  
  const newsApi = new NewsApi({
    baseUrl: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
}, BODY, checkDate, apiKey);

const createCard = (newsApi) => new NewsCard(newsApi)
export const list = new NewsCardList(LIST, createCard, newsApi, RESULT, PRELOADER, NOT_FOUND,MORE_BUTTON )
const search = new SearchInput(LIST, BODY, newsApi, BAR, list, NOT_FOUND, PRELOADER, RESULT, SEARCH, MORE_BUTTON)



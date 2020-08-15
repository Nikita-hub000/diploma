import "../src/pages/index.css";
import NewsCard from './js/components/NewsCard'
import  NewsCardList  from "./js/components/NewsCardList";
import NewsApi from './js/modules/NewsApi'
import SearchInput from './js/components/SearchInput';
import swiper from 'swiper/bundle';

import { LIST, BODY, RESULT, PRELOADER, NOT_FOUND, BAR, BUTTON, MORE_BUTTON } from "./js/constants/const.js";

var swipere = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    // slidesPerGroup: 3,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,

      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      }

    }
  });
  const API_URL = "https://praktikum.tk/news/v2/everything?";
  // NODE_ENV === "production" ? "https://praktikum.tk/news/v2/everything?": "https://newsapi.org/v2/everything?";
  const newsApi = new NewsApi({
    baseUrl: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
}, body);
const createCard = new NewsCard(newsApi)
const list = new NewsCardList(LIST, createCard, newsApi, RESULT, PRELOADER, NOT_FOUND)
const search = new SearchInput(LIST, BODY, newsApi, BAR, list, NOT_FOUND, PRELOADER, RESULT, BUTTON, MORE_BUTTON)
import "../../src/pages/index.css";
import ActivateSwiper from '../js/utils/swiper'
import CommiCard from '../js/components/CommitCard'
import CommitCardList from '../js/components/CommitCardList'
import swiper from 'swiper/bundle';
import GithubApi from '../js/modules/GithubApi'
import {COMMIT_CONTAINER} from '../js/constants/const'
console.log("main.js")
const GitUrl = 'https://api.github.com/repos/Nikita-hub000/diploma';
const gitApi = new GithubApi({
    baseUrl: GitUrl,
    headers: {
        'Content-Type': 'application/json'
    },
})
const newCommit = (gitApi) => new CommiCard(gitApi);
const commitContainer = new CommitCardList(COMMIT_CONTAINER, newCommit, gitApi, ActivateSwiper)

const swipere = new swiper('.swiper-container', {
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
  })
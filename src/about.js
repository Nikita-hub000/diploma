
import ActivateSwiper from './js/utils/swiper'
console.log("main.js")
import CommiCard from './js/components/CommitCard'
import CommitCardList from './js/components/CommitCardList'
import GithubApi from './js/modules/GithubApi'
import {COMMIT_CONTAINER} from './js/constants/const'
const GitUrl = 'https://api.github.com/repos/Nikita-hub000/diploma';
const gitApi = new GithubApi({
    baseUrl: GitUrl,
    headers: {
        'Content-Type': 'application/json'
    },
})
const newCommit = (gitApi) => new CommiCard(gitApi);
const commitContainer = new CommitCardList(COMMIT_CONTAINER, newCommit, gitApi, ActivateSwiper)


export default class CommitCardList{
    constructor(container, createCommitCard, githubApi, initSwiper) {
        this.container = container;
        this.createCommitCard = createCommitCard;
        this.githubApi = githubApi;
        this.initSwiper = initSwiper;
        this.render()
    }
    add(data){
        this.container.append(this.createCommitCard(data).create())
    }
    render(){
        this.githubApi.getCardsCommits()
            .then(res => {
                res.forEach(item => this.add(item));
                this.initSwiper()
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }
}
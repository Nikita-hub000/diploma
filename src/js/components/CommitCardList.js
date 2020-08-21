export default class CommitCardList{
    constructor(container, createCommitCard, gitApi, Swiper) {
        this.Swiper = Swiper;
        this.createCommitCard = createCommitCard;
        this.container = container;
        this.gitApi = gitApi;
        this.render()
    }
    add(data){
        this.container.append(this.createCommitCard(data).create())
    }
    render(){
        this.gitApi.getCommits()
            .then(res => {
                res.forEach(item => this.add(item));
                this.Swiper()
            })
            .catch((err) => {
                console.log(err); 
            });
    }
}
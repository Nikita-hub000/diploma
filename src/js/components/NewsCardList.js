export default class NewsCardList{
    constructor(list, createCard, api, result, finding, notFound, more){
        this.list = list
        this.createCard = createCard
        this.api = api
        this.result = result
        this.finding = finding
        this.notFound = notFound
        this.more = more
        this.save()
    }
    add(info){
       this.list.append(this.createCard(info).create())
    }
    render(){
        console.log('eee')
       this.api.getNews()
       .then(res =>{
        res.articles.slice(this.list.children.length, 3 + this.list.children.length).forEach(x=> this.add(x));
        this.lengthItems = res.articles.length;
        localStorage.setItem('total', JSON.stringify(res.totalResults));
        localStorage.setItem('info', JSON.stringify(res.articles));
        localStorage.getItem('info');
        this.moreButton()
        this.finding.style.display = "none";
        if (this.list.children.length === 0) {
            this.result.style.display = "none";
            this.notFound.style.display = "flex";
        } else {
            this.notFound.style.display = "none";
            this.result.style.display = "flex";
        }
       })
       .catch(x => {
           x = 'res'
           console.log(x)
       })
    }
    save(){
        this.result.style.display = "none";
        this.parse = JSON.parse(localStorage.getItem('info'));
        if (localStorage.getItem('info') !== null) {
            this.parse.slice(this.list.children.length, 3 + this.list.children.length).forEach(x => this.add(x));
            this.result.style.display = "flex";
        }
        this.moreButton()  
    }
    moreButton(){
        if (localStorage.getItem('info') !== null) {
            if (this.parse.length == this.list.children.length) {
                this.more.style.display = "none";
            } else {
                this.more.style.display = "flex";
            }
        }
    }
    
}
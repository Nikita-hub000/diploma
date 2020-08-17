export default class NewsCardList{
    constructor(list, createCard, api, result, finding, notFound){
        this.list = list
        this.createCard = createCard
        this.api = api
        this.result = result
        this.finding = finding
        this.notFound = notFound
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
        localStorage.setItem('info', JSON.stringify(res.articles));
        localStorage.setItem('total', JSON.stringify(res.totalResults));
        this.lengthItems = res.articles.length;
        localStorage.getItem('info');
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
    }
    
}
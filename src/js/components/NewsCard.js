export default class NewsCard{
    constructor(data){
        this.data= data;
    }
    create(){
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardDate = document.createElement('p');
        const cardHead = document.createElement('h3');
        const cardText = document.createElement('p');
        const cardFoot = document.createElement('p');
        card.classList.add('card')
        cardImage.classList.add('card__image');
        cardImage.setAttribute('href', this.data.urlToImage);
        cardDate.classList.add('card__date')
        cardDate.textContent = this.data.publishedAt
        cardHead.classList.add('card__heading')
        cardHead.textContent = this.data.title;
        cardText.classList.add('card__text')
        cardText.textContent = this.data.description;
        cardFoot.classList.add('card__footer')
        cardFoot.textContent = this.data.source.name
        card.appendChild(cardImage)
        card.appendChild(cardDate)
        card.appendChild(cardFoot)
        card.appendChild(cardHead)
        card.appendChild(cardText)
        console.log('aaa')
        return card;
    }
} 

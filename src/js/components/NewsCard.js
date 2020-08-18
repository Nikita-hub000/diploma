export default class NewsCard{
    constructor(data){
        this.data= data;
    }
    // функция для простановки правильной даты
    times(str){
        // массив с шаблонными месяцами
        const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        const date = new Date(str);
        this.day = `${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()}г.`
        return this.day
    }
    create(){
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardDate = document.createElement('p');
        const cardHead = document.createElement('h3');
        const cardLink = document.createElement('a')
        const cardText = document.createElement('p');
        const cardFoot = document.createElement('p');
        const cardDiv = document.createElement('div')
        card.classList.add('card')
        cardImage.classList.add('card__image');
        cardLink.style.textDecoration = "none"
        cardLink.setAttribute('href', this.data.url)
        cardImage.setAttribute('src', this.data.urlToImage);
        cardDate.classList.add('card__date')
        cardDate.textContent = this.times(this.data.publishedAt)
        cardHead.classList.add('card__heading')
        cardHead.textContent = this.data.title;
        cardText.classList.add('card__text')
        cardText.textContent = this.data.description;
        cardFoot.classList.add('card__footer')
        cardFoot.textContent = this.data.source.name
        cardDiv.appendChild(cardDate)
        cardDiv.appendChild(cardHead)
        cardDiv.appendChild(cardText)
        cardDiv.appendChild(cardFoot)
        cardLink.appendChild(cardImage)
        cardLink.appendChild(cardDiv)
        card.appendChild(cardLink)
        return card;
    }
} 

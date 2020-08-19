export default class Statistics {
    constructor(container, local) {
        this.container = container; 
        this.date = new Date();
        this.local = local; 
        this.begin = 0;
        this.end = 7;
        this.addCardStat();
        this.sortArrayRes()
    }
    checkAr(massiv){
        const mas = []
        massiv.forEach(item => {
            mas.push(item.title);
            mas.push(item.description);
        })
        this.sum = 0;
        const find = localStorage.getItem('search').toLocaleLowerCase();
        for (let i = 0; i < mas.join().toLowerCase().split(' ').length; i++) {
            if (mas.join().toLowerCase().split(' ')[i] == find) {
                this.sum += 1;
            } else {
                this.container.querySelector('.analyze__text_white').textContent = 0
                this.container.querySelector('.analyze__block').style.width = "0%"
            }
        }
        return this.sum
    }
    count(mas, today){
        this.dayArray = mas.filter(x => this.times(x.publishedAt) == this.times(today));
        return this.checkAr(this.dayArray)
    }

    sortArrayRes(){
        while (this.begin < this.end) {
            this.begin += 1;
            this.week = this.date;
            this.week = this.date.setDate(this.date.getDate() - 1);
            this.textRectange = this.count(this.local, this.week);
            this.addCardStat(this.textRectange)
        }
    }
    create(number){
        const dates = document.createElement('p')
        const square = document.createElement('div')
        const num = document.createElement('p')
        const item = document.createElement('div')
        dates.classList.add('analyze__date')
        item.classList.add('analyze__item')
        dates.textContent = `${this.date.getDate()}, ${this.getWeekDay()}`;
        square.classList.add('analyze__block')
        square.style.width = `${number}%`
        num.classList.add('analyze__text')
        num.classList.add('analyze__text_white')
        num.textContent = number
        square.appendChild(num)
        item.appendChild(dates)
        item.append(square)
        return item;
    }
    addCardStat(number){
        this.container.append(this.create(number))
    }
    getWeekDay(){
        const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        return days[this.date.getDay()];
    }
    times(str){
        // шаблон для проставлении даты
        const date = new Date(str);
        this.time = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`
        return this.time
    }
}
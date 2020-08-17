export default class Statistics {
    constructor(container, localParse, statisticsResult, statisticsMentioning) {
        this.template = document.querySelector('#tabel-schedule').content;
        this.container = container; // обертка графиков
        this.date = new Date();
        this.localParse = localParse; // res.articles
        this.request = statisticsResult;
        this.statisticsMentioning = statisticsMentioning;
        this.start = 0;
        this.end = 7;
        this.addCard();
        this.sortArrayRes()
    }
    getWeekDay = () => {
        const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        return days[this.date.getDay()];
    }
    times = (str) => {
        const date = new Date(str);
        this.time = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`
        return this.time
    }
    checkArray = (arr) => {
        const searchValue = localStorage.getItem('searchQuery').toLocaleLowerCase();
        const ar = []
        arr.forEach(item => {
            ar.push(item.title);
            ar.push(item.description);
        })
        const newAr = ar.join().toLowerCase().split(' ');
        this.sum = 0;
        for (let i = 0; i < newAr.length; i++) {
            if (newAr[i] == searchValue) {
                this.sum += 1;
            } else {
                this.container.querySelector('.tabel__rectange').textContent = 0
                this.container.querySelector('.tabel__rectange').style.width = "0%"
            }
        }
        return this.sum
    }
    count = (array, day) => {
        this.dayArray = array.filter(item => this.times(item.publishedAt) == this.times(day));
        this.bla = this.checkArray(this.dayArray)
        return this.bla
    }

    sortArrayRes = () => {
        while (this.start < this.end) {
            this.week = this.date;
            this.week = this.date.setDate(this.date.getDate() - 1);
            this.start += 1;
            this.textRectange = this.count(this.localParse, this.week);
            this.addCard(this.textRectange)
        }
    }

    create = (number) => {
        this.view = this.template.cloneNode(true).children[0];
        this.view.querySelector('.tabel__date').textContent = `${this.date.getDate()}, ${this.getWeekDay()}`;
        this.view.querySelector('.tabel__rectange').textContent = number
        this.view.querySelector('.tabel__rectange').style.width = `${number}%`
        return this.view;
    }
    addCard = (number) => {
        this.container.append(this.create(number))
    }
}
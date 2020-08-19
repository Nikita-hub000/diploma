import "../../src/pages/index.css";
console.log('analy')
import Statistics from '../js/components/Statistics'

const body = document.querySelector('body');
body.querySelector('.week').textContent = localStorage.getItem('total');
const statisticsResult = body.querySelector('.result').textContent = localStorage.getItem('search').toLocaleLowerCase();
const Mention = localStorage.getItem('info').toLocaleLowerCase().split(' ');
const container = body.querySelector('.blocks');
const Parse = JSON.parse(localStorage.getItem('info'))

let sum = 0;
for (let i = 0; i < Mention.length; i++) {
    if (Mention[i] == statisticsResult) {
        sum += 1;
    }
}
body.querySelector('.mention').textContent = sum;

const statistics = new Statistics(container, Parse);
const date = new Date();

function getMonth(month) {
    const days = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return days[month.getMonth()].toUpperCase();
}
body.querySelector('.month').textContent = getMonth(date);
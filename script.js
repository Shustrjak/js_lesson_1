'use strict';
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");
const screenPrice = parseInt(prompt("Сколько будет стоить данная работа?", "12000"));
const rollback = 36;
const adaptive = confirm("Нужен ли адаптив на сайте?"); 
const service1 = prompt('Какой дополнительный тип услуг нужен?');
const servicePrice1 = parseInt(prompt('Сколько будет стоить?'));
const service2 = prompt('Какой дополнительный тип услуг нужен?');
const servicePrice2 = parseInt(prompt('Сколько будет стоить?'));
const allServicePrices = function getAllServicePrices(a, b) {
    return a + b;
};
const fullPrice = getFullPrice(screenPrice, allServicePrices(servicePrice1, servicePrice2));
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
function getFullPrice(a, b) {
    return a + b;
}
function getTitle(text) {
    text = text.trim();
    return text[0].toUpperCase() + text.slice(1);
}
function getServicePercentPrices(price, rollback) {
    return price - Math.ceil(price * (rollback / 100));
}
const showTypeOf = function (variable) {
    console.log(variable, typeof variable);

};
const getRollbackMessage = function (price) {
    if ( price >= 30000 ) {
        return 'Даем скидку 10%';
    } else if ( price >= 15000 && price < 30000 ){
        return 'Даем скидку 5%';
    } else if ( price >= 0 && price < 15000 ){
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(screens.toLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));
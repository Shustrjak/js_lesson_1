'use strict';
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt("Как называется ваш проект?");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");
        do {
            appData.screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?"));
        } while (!isNumber(appData.screenPrice));
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
        
    },
    start: function () {
        appData.asking();
        appData.allServicePrices = getAllServicePrices();
        appData.fullPrice = getFullPrice();
        appData.servicePercentPrice = getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.title = getTitle(appData.title);
        appData.logger();
    },
    logger: function () {
        for (let key in appData) {
            
            console.log(key, ': ', appData[key]);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    }

};
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
};


const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            appData.service1 = prompt('Какой первый дополнительный тип услуг нужен?');
        } else if (i === 1) {
            appData.service2 = prompt('Какой второй дополнительный тип услуг нужен?');
        }
        sum += parseFloat(prompt('Сколько будет стоить?'));
    }
    return sum;
};
const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices;
};
const fullPrice = getFullPrice();

const getServicePercentPrices = function (price, rollback) {
    return price - Math.ceil(price * (rollback / 100));
};

function getTitle(text) {
    text = text.trim();
    return text[0].toUpperCase() + text.slice(1);
}
const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку 10%';
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку 5%';
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};
appData.start();
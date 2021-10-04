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
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100));

// вариант 1 вывод в консоль
switch (true) {
    case fullPrice >= 30000:
        console.log('Даем скидку 10%');        
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log('Даем скидку 5%');        
        break;    
    case fullPrice > 0 && fullPrice < 15000:
        console.log('Скидка не предусмотрена');    
        break;
    default:
        console.log('Что то пошло не так');
        break;
}

// вариант 2 вывод в консоль


if ( fullPrice >= 30000 ) {
    console.log('Даем скидку 10%');
} else if ( fullPrice >= 15000 && fullPrice < 30000 ){
    console.log('Даем скидку 5%');
} else if ( fullPrice >= 0 && fullPrice < 15000 ){
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}


console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани.');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани.');
console.log(screens.toLowerCase().split(', '));
console.log( servicePercentPrice);


'use strict';
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");

let screenPrice;

function isNumber(num){
return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
}

do{
    screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?"));
}
while(!isNumber(screenPrice));

const rollback = 36;
const adaptive = confirm("Нужен ли адаптив на сайте?"); 
const allServicePrices = function getAllServicePrices() {
	let sum = 0;
	for (let i = 0; i < 2; i++){

		if (i===0){
			const service1 = prompt('Какой первый дополнительный тип услуг нужен?');
		} else if(i===1){
			const service2 = prompt('Какой второй дополнительный тип услуг нужен?');
		}

		sum += parseFloat(prompt('Сколько будет стоить?'));
	}
    return sum;
};
const fullPrice = getFullPrice(screenPrice, allServicePrices());
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
function getFullPrice(a, callback) {
    return a + callback;
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

console.log(fullPrice);
console.log(screens.toLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));
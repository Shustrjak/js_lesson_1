const title = 'Калькулятор разработки';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 100;
const rollback = 50;
const fullPrice = 10000;
const adaptive = false;


console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани.');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани.');
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));
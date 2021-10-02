let title = 'Калькулятор разработки';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 100;
let rollback = 50;
let fullPrice = 10000;
let adaptive = false;


console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/долларов/гривен/юани.');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/долларов/гривен/юани.');
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback / 100));
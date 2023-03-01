str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";

str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(str);

str = str.replace(/([.,])/g, '$1 ');
str = str.replace(/\s+/g, ' ').trim();

const words = str.split(' ');
const wordCount = words.length;
console.log(wordCount); 

const uniqueWords = new Set(words);
const uniqueWordCount = uniqueWords.size;
console.log(uniqueWordCount);


console.log(str);
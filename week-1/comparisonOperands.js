// KARŞILAŞTIRMA OPERATÖRLERi
// değerleri karşılaştırır ve true ya da false olarak döner

const a = 5;
const b = 3;

console.log ( a > b); // true burada a b değerinden büyük müdür? karşılaştırması yapılır ve 5 3'den büyük olduğu için true döner
console.log ( a < b); // false burada a b değerinden küçük müdür? karşılaştırması yapılır ve 5 3'ten büyük olduğu için false döner
console.log ( a == b); // false burada a b değerleri eşit midir? karşılaştır yapılır ve 5 3' e eşit olmadığı için fasle döner
console.log ( a != b); // true burada a b değerleri eşit değil midir? karşılaştırması yapılır ve 5 3' e eşit olmadığı için true döner
console.log ( a >= b); // true burada a b değerleri eşit mi yoksa b'değerinden büyük müdür? karşılaştırması yapılır ve 5 3'den büyük olduğu için true döner b değeri 5 olsaydı yine true.
console.log ( a <= b); // false burada a b değerleri eşit mi yoksa b' değerinden büyük müdür? karşılaştırması yapılır ve 5 3'den büyük olduğu için false döner b değeri 5 olsaydı true.



const c = 5;
const d = "5";
console.log ( a === b); // false burada a b değerleri eşit midir? karşılaştırması yapılır bu eşitlik türü kesin eşitlik ister tipler de aynı olacak
console.log ( a !== b); // true burada a b değerleri eşit değil midir? karşılaştirması yapılır bu eşitlik türü kesin eşitlik ister.

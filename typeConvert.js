const num = 123;
//const str = num.toString(); // sayıyı stringe çevirir
console.log (num.toString());      // sayıyı stringe çevirir
console.log (typeof(num.toString())); // tip kontrol
//console.log(typeof(str));   // tip kontrol


const str1 = "456";
const num1 = parseInt(str1); // stringi sayiya çevirir
const num2 = parseFloat(str1); // stringi sayiya çevirir
console.log(Number(str1)); // stringi sayiya çevirir
console.log(typeof(Number(str1))); // tip kontrol
console.log(num1);
console.log (typeof(num1)); // tip kontrol
console.log(num2);
console.log (typeof(num2)); // tip kontrol


const bool = true;
const num3 = parseInt(bool); // boolean false 0'a, true 1'e çevirir direkt number karakter aradığı için true ya da false NaN çıkar
const num4 = parseFloat(bool); // boolean false 0'a, true 1'e çevirir  direkt number karakter aradığı için true ya da false NaN çıkar
console.log (Number(bool)); // boolean false 0'a, true 1'e çevirir
console.log (typeof(Number(bool))); // tip kontrol
console.log (num3); 
console.log (typeof(num3)); // tip kontrol
console.log (num4);
console.log(typeof(num4)); // tip kontrol


const str4 = 10;
const str5 = 10.5;
const str6 = "hello";
console.log(Number(str4)); // stringi sayiya çevirir
console.log(typeof(Number(str4))); // tip kontrol
console.log(Number(str5));  // stringi sayiya çevirir
console.log(typeof(Number(str5)));  //tip kontrol
console.log(Number(str6));  // stringi sayiya çevirir
console.log(typeof(Number(str6)));  //tip kontrol



const str7 = "124.53";
const str8 = "12px";
console.log(parseInt(str7));  // stringi sayiya çevirir
console.log(parseFloat(str7)); // stringi sayiya çevirir
console.log(parseInt(str8));  // stringi sayiya çevirir
console.log(parseFloat(str8)); // stringi sayiya çevirir


const num5 = 9.81576544;
console.log(num5.toFixed(2));  //virgülden sonra kaç basamak göstermek istiyorsak o kadar yazılır 2 hane yaptık 3.hane 5 ve üstüyse 81 olan kısım 82 olarak yazılır
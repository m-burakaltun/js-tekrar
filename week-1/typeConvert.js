// TÜR DÖNÜŞTÜRME 
// sayılara dönüştürme 
//açık dönüştürme 
console.log(Number("5")); // 5 çıkar stringi number yapar
console.log(Number(true)); // 1 çıkar booleani number yapar
console.log(Number("5.5")); // 5.5 çıkar stringi number yapar


// null false ve "" değerleri her zaman 0 çıkar
console.log(Number(null)); // 0 çıkar nulli number yapar 
console.log(Number(false)); // 0 çıkar falseyi number yapar
console.log (Number("")); // 0 çıkar stringi number yapar


// bir değeri sayıya dönüştürmek mümkün değilse NaN çıkar açılımı Not a Number
console.log(Number(undefined)); // NaN çıkar undefinedi number yapar
console.log(Number(NaN)); // NaN çıkar NaNı number yapar
console.log(Number("5.5.5")); // NaN çıkar stringi number yapar değerin sayısal karşılığı yok 
console.log(Number("5.5.5.5")); // NaN çıkar stringi number yapar değerin sayısal karşılığı yok
console.log(Number("ahmet"));   // NaN çıkar stirng değer bir sayısal karşılık yok
console.log(Number("2px")); // NaN çıkar stringi number yapar değerin sayısal karşılığı yok

// aritmetik işlemler dolaylı tür dönüşümü yapar
console.log("5" *2); // 10 çıkar stringi number yapar 
console.log("5" - 2); // 3 çıkar stringi number yapar 
console.log ("5"+ 2 ); // ===>>>> !!!!! 52 çıkar string birleştirme işlemi yapar tür dönüşümü stirng yönünde olur !!!!!!!!!!!!!!!!
console.log (5 + true); // 6 çıkar booleani number yapar true 1 dir ve işlemde 1 olarak sayılır


// karşılaştırma operatörleri dolaylı tür dönüşümü yapar
// ifadeler number değilse number gibi hesaplanır
console.log(5 > "5"); // false çıkar string 5 i  number yapar
console.log(5 < "5"); // false çıkar string 5 i  number yapar   
console.log(5 == "5"); // true çıkar string 5 i  number yapar kesin eşitlik olmadığı için 5 = "5" gibi davranır 
console.log(5 === "5"); // false çıkar string 5 i  number yapar kesin eşitlik olduğu için 5 = 5 sonucunu arar


const num = 123;
//const str = num.toString(); // sayıyı stringe çevirir
console.log (num.toString());      // sayıyı stringe çevirir
console.log (typeof(num.toString())); // tip kontrol
//console.log(typeof(str));   // tip kontrol


const str1 = "456";
const num1 = parseInt(str1); // stringi kesirsiz sayiya çevirir 
const num2 = parseFloat(str1); // stringi kesirli sayiya çevirir
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
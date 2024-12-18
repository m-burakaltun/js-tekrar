const message = "merhaba " + "js"; // temel birleştirme
console.log (message); 

const sayi = 12;
const sayiBirlestir = "merhaba " + sayi + " js"  // string ve number birleştirme number değeri de string oldu 
console.log(sayiBirlestir);
console.log(typeof(sayiBirlestir)); // tipini kontrol ettik typeof.js dosyasında örenkler var

console.log("js " + 44); // çıktı "js 44" string ifade
console.log(true + " js"); // çıktı "true js" string ifade
console.log(1+2+"4"); //çıktı "34" string ifade işlem önceliği yaptı 
console.log("3"+1+2); //çıktı "312" string ifade işlem önceliği yaptı string önde olduğu için hepsi string oldu


const str1 = "Merhaba";
const str2 = "Dünya";
console.log(str1 + " " + str2); //temel birleştirme
console.log(str1.concat(" ",str2)); //concat kullanımı

const fruits = ["Elma", "Muz", "Kivi"]; //dizileri string yapma
console.log(fruits.join(" "));

const str3 = "Merhaba"; 
const lastChar = str3[str1.length-1]; // son karakteri bulma
const index = str3.length;  //string uzunluğu bulma
const lastCharIndex = str3.length-1; // son karakterin indexini bulma
console.log (lastChar);
console.log(index);
console.log(lastCharIndex);
console.log (str3[2]);  // belli bir indexi yazdırma





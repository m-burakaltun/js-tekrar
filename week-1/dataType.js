// Değişken tanımlamak için iki adet key vardır;
// Bunlar const ve let'dir
// const değişkenler sabittir ve değiştirilemez ve hemen bir değere atanması gerekir
// const deger; ==>> blok hata verir 
// let değişkenler değiştirilebilir ve bir değer atanmadan tanımlanabilir
let user;
user = "Ahmet"; // ==>> bu blok çalışır let önce undefined sonra ahmet değerini alır
const ad = "Ahmet";
// ad = "mehmet";  ==>> bu kod bloğu hata verir const sabittir

let soyad = "Kara";
soyad = "Kara2";  // bu kod bloğu çalışır let değişebilir  burada yapılan işlem değeri geçersiz kılma işlemidir.


// VERİ TÜRLERİ 
const age = 20;
const price = 10.99;
const slope = -4;  // yandaki ve yukardaki veri türleri "number"dır tamsayı kesirli sayı  negatif sayı türleri burda tutulur


const name = "burak";
const company = 'google';
const address = "istanbul bursa ankara "; // yandaki ve yukardaki veri türleri "string"dir stringler çift tırnak ya da tek tırnak içinde belirtilir

const isOpen = true;  
const isModel = false; // true ve false boolean değerdir ve sadece evet hayır tutar

let value = null // null özel değerdir ve değerin olmadığı anlamına gelir boştur

let val;
console.log (val); // çıktısı undefined olacak değer tanımsızsa undefined çıktısı alınır


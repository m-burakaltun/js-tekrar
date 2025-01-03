const num1 = 7.2;
const num2 = 7.8;
const num3 = -4.3;
const num4 = 8.99;
console.log("num1 " + Math.floor(num1));  // sayıyı ondan küçük ya da ona eşit olan en yakın tam sayıya çevirir
console.log("num2 "+ Math.floor(num2));  // sayıy ondan küçük ya da ona eşit olan en yakın tam sayıya çevirir
console.log("num3 "+ Math.floor(num3));  // sayıyı ondan küçük ya da ona eşit olan en yakın tam sayıya çevirir
console.log("num4 "+ Math.floor(num4));  // sayıyı ondan küçük ya da ona eşit olan en yakın tam sayıya çevirir

console.log("num1 "+ Math.ceil(num1));  // sayıyı ondan büyük ya da ona eşit olan en yakın tam sayıya çevirir
console.log("num2 "+ Math.ceil(num2));  // sayıyı ondan büyük ya da ona eşit olan en yakın tam sayıya çevirir
console.log("num3 "+ Math.ceil(num3));  // sayıyı ondan büyük ya da ona eşit olan en yakın tam sayıya çevirir
console.log("num4 "+ Math.ceil(num4));  // sayıyı ondan büyük ya da ona eşit olan en yakın tam sayıya çevirir

console.log("num1 "+ Math.round(num1));  // sayıyı matematiksel yuvarlar 0.5 ve üstünü üstteki sayıya diğerlerini alttaki sayıya çevirir
console.log("num2 "+ Math.round(num2));  // sayıyı matematiksel yuvarlar 0.5 ve üstünü üstteki sayıya diğerlerini alttaki sayıya çevirir
console.log("num3 "+ Math.round(num3));  // sayıyı matematiksel yuvarlar 0.5 ve üstünü üstteki sayıya diğerlerini alttaki sayıya çevirir
console.log("num4 "+ Math.round(num4));  // sayıyı matematiksel yuvarlar 0.5 ve üstünü üstteki sayıya diğerlerini alttaki sayıya çevirir

const max = Math.max(num1, num2, num3, num4);
const min = Math.min(num1, num2, num3, num4);
console.log("max: "+ max);   // en büyük sayıyı yazar
console.log("min: "+ min);  // en küçük sayıyı yazar



const randomNumber = Math.random(); // 0 ile 1 arasında rastgele bir sayı üretir
console.log(randomNumber); 

const randomNumber2 = Math.random() * 10; // 0 ile 10 arasında rastgele bir sayı üretir
console.log(randomNumber2);

const randomNumber3 = Math.random() * 100; // 0 ile 100 arasında rastgele bir sayı üretir
console.log(randomNumber3);

const randomNumber4 = Math.floor (Math.random() * (30-10+1 )) +10; // 10 ile 30 arasında rastgele bir tamsayı üretir
console.log("randomNumber4: "+randomNumber4);


// kesirli sayılarda işlem yaparken toFixed() kullanılarak kesirli sayılardaki hesap hatasından kurtulabiliriz
console.log (0.2 + 0.1);  // 0.3 buradaki sonuç 0.3 e eşit değildir çözümü için;
console.log((0.2 + 0.1).toFixed(1));  // 0.3 toFixed'ın içine verdiğimiz değer kadar basamak sayısını gösterir 
console.log((0.2 + 0.1).toFixed(2));  // 0.30
console.log((0.2 + 0.1).toFixed(3));  // 0.300
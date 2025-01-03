// İf ifadesi
//belirli bir koşulu kontrol eder 
//true false mantığıyla çalışır
const a = 15;
const b = 10;
if (a > b){
    console.log("a b'den büyüktür");
}
// bu kod çalıştığında a b'den büyükse yani ifade true ise log çıktısını yazar değilse birşey yapmaz
// bu kodun false durumunda da çıktı vermesi için else ifadesi kullanılır

if (a > b){
    console.log("a b'den büyüktür");
}
else {
    console.log("a b'den küçüktür");
}

// ancak bu durumda a b'den büyük değilse direkt olarak küçük olarak alıyor ya eşitlik ihtimali !!!!!
// bu durumda else if ifadesi devreye girer


if (a > b){
    console.log("a b'den büyüktür");
}
else if (a < b){
    console.log("a b'den küçüktür");
}
else {
    console.log("a ve b eşit");
}

// bu kod çalışır ancak biraz daha işlevsel hâle gelmesi lazım 


function kontrol(a, b){
    if (a > b){
        return "a b'den büyüktür";
    }
    else if (a < b){
        return "a b'den küçüktür";
    }
    else {
        return "a ve b eşit";
    }

}
console.log(kontrol(10,10));

// yukarıdaki fonksiyonel kullanım ile daha işlevsel bir kod yazabiliriz

// ternary operatörü kullanımı için basit koşullar önerilir karmaşık dallanmalarda if else daha mantıklıdır


const x = 10;
const y = 20;
const buyukSayi = x > y ? x : y;
console.log(buyukSayi);

// burada x > y ile koşul kontrol edilir ? işareti ile koşulun doğru ise x değeri atanır : işareti ile koşulun yanlış ise y değeri atanır



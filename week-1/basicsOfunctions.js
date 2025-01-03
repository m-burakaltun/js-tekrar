// farklı değerlerle bir görevi yerine getiren bloktur
function merhabaDe(){

    console.log ("merhaba");
}
merhabaDe();

// yukarıdaki foknksiyon basit bir gövdedir.
// fonksiyonlar parametre alabilir 
function sayiTopla (a, b, c) {
    let toplam = a + b + c;
    console.log(toplam);
}

sayiTopla(4, 6, 8);

// yukarıdaki fonksiyon 3 parametre almıştır ve toplama işlemini döndürmüştür ve fonksiyona parametre gönderilmiştir.
// bu fonksiyon daha kısa yazılabilir
function sayiTopla (a, b, c) {
    console.log(`toplam : ${a + b + c}`);
}

sayiTopla (1, 3, 5); // buradaki her bir sayı argümandır


// parametreler yalnızca fonksiyonun gövdesinde erişilebilen yerel değişkenlerdir
// bir fonksiyonun hiçbir parametresi olmayabilir ya da birden fazla parametresi olabilir
// parametrelere atanan değerler sırayla atanır


function sayiCarp(x, y, z) {
    return x * y * z;
}

const sonuc = sayiCarp(2, 4, 6);
console.log(sonuc);

// return kullanımı fonksiyonda yürütmeyi durdur ve mevcut değeri döndür anlamı taşır 
// fonksiyonun içinde return ile bir değer döndürülürse fonksiyonun geri kalanı çalışmaz

function bol (q, w, t) {
    return q / w / t;
    console.log(q/ w / t); //===>>> !!! önünde return olduğu için çalışmaz
}

const sonuc2 = bol(10, 2, 5);
console.log(sonuc2);

function cıkar( ı, e, r) {
    const product = ı * e * r;
}

const result = cıkar(2, 3, 4);
console.log(result); // ===>>> undefined döner çünkü sonucu döndüren bir değişken (return, log) yok 



function multiply ( p, ş){
    console.log(`result: ${p+ş}`);
}

console.log ("önce bu log çıkacak");
multiply(5, 7);
console.log("fonksiyon değerleri yazıldıktan sonra bu log çıkacak");

// FONKSİYONLARIN SCOPE'U
// bir fonksiyonun içinde tanımlanan değişkenler fonksiyonun içinde erişilebilir
// fonksiyonun dışında tanımlanan değişkenler global değişkendir ve her yerden erişilebilir


const globalVariable = "global";
function scopeExample() {
    const localVariable = "local";
    console.log(globalVariable);
    console.log(localVariable);
}

scopeExample()
console.log(globalVariable); // ===>>> global
//console.log(localVariable); // ===>>> undefined çünkü fonksiyonun yerel fonksiyonudur ve dışarıdan erişilemez





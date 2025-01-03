// typeof veri türünü öğrenmek için kullanılır

console.log(typeof 42); // number
console.log(typeof "selam"); // string
console.log(typeof true); // boolean
console.log(typeof 4.42); // number

const obj = {
    title: "last",
    rating: 4
};

const arr = [1,2,3];

function fonk (fon){
    return "merhaba"
}
console.log(typeof fonk); // function
console.log (typeof obj); // object
console.log (typeof arr); // object

const bos = null;
console.log(typeof bos); // object  ==>> !!!!!  null tip olarak nesne çıkar çünkü null nesnenin değil değerin yok olma durumudur.

console.log(typeof NaN); // number  ==>> !!!!!  NaN not a number tip olarak sayılama durumudur.  NaN tip olarak number

let i = 5;
console.log(typeof i); // number

 i = "veri";
console.log (typeof i); // string
 i = true; 
console.log(typeof i); // boolean


function poz(deger){
    if (deger > 0 && typeof deger === 'number'){
        return true;
    }
    else {
        return false
    }
    
}

console.log(poz("2")); // false  ==>> döngü burada false döner çünkü string tipinde bir değer gelmiştir.
console.log(poz(2));   // true   ==>> döngü burada true çünkü number tipinde bir değer gelmiştir.  ve 2 0 dan büyüktür.
console.log(poz(-2));   // false  ==>> döngü burada false döner çünkü -2 0 dan küçüktür.

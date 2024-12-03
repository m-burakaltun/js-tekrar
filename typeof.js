console.log(typeof 42);
console.log(typeof "selam");
console.log(typeof true);
console.log(typeof 4.42);

const obj = {
    title: "last",
    rating: 4
};

const arr = [1,2,3];

function fonk (fon){
    return "merhaba"
}
console.log(typeof fonk);
console.log (typeof obj);
console.log (typeof arr);

const bos = null;
console.log(typeof bos);

console.log(typeof NaN);

let i = 5;
console.log(typeof i);

 i = "veri";
console.log (typeof i);
 i = true;
console.log(typeof i);


function poz(deger){
    if (deger > 0 && typeof deger === 'number'){
        return true;
    }
    else {
        return false
    }
    
}

console.log(poz("2"));

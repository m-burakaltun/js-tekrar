const stringValue = "merhaba"; // string bir değişken tanımladı const olduğu için değer sabittir değişmez
console.log (stringValue);
//stringValue = "js"   // const değişkeni değiştirilemez 
//console.log (stringValue); // çalışınca hata verir

let stringCharset = "merhaba"; // string  let değişkeni tanımladı 
console.log (stringCharset);
stringCharset = "js"; // let değişkeni değiştirilebilir
console.log (stringCharset); // çalışır

// const ve let kullanımı için kural aşağıdaki gibi olabilir:
// Değişkenleri tanımlamak için varsayılan olarak const kullanın.
// Kodun çalıştığı sırada bir değişkenin değerini değiştirmeniz gerekiyorsa let kullanın. Bu kural, bakımı kolay, daha güvenilir ve anlaşılır kod yazmanıza yardımcı olacaktır.

//membuat fuction ver tnp argumen
function greet () {
    console.log("Hai, apa kabar? ")
}

//cara manggil function
//btw biar ini keliatan lebih simple sama rapih
greet()




//funct w/ parameter:
function greet(name){
    alert ("Hai, apa kabar? " + name + "?")
}
//fungsi (+) jadi pemisah

let yourName = prompt("Siapa nama anda?")

//cara manggil w/parameter
greet(yourName);




//funct return:
function add(a, b){
    result = a + b;
    result_text = a + "+" + b + "=" + result;  //bedanya + sama "+"
                                                    // (+) = buat pemisah aja/Operator: bisa jumlah atau gabung
                                                    // ("+") = yang dipake/String literal: teks karakter + saja
    return result_text;                             // logika = 2 + "+" 
}                                                   // → karena ada string ("+"), maka 2 diubah jadi string: 
                                                    // "2" + "+" → "2+"

    
console.log(add(10,11))



//funct dlm variable:
function add(a, b){
    result = a + b;
    result_text = a + "+" + b + "=" + result;  //bedanya + sama "+"
                                                    // (+) = buat pemisah aja/Operator: bisa jumlah atau gabung
                                                    // ("+") = yang dipake/String literal: teks karakter + saja
    return result_text;                             // logika = 2 + "+" 
}                                                   // → karena ada string ("+"), maka 2 diubah jadi string: 
                                                    // "2" + "+" → "2+"

addition = add(10,11);
//ver variable
console.log("hasilnya adalah " + addition);
                         // ↑ jangan lupa tambah spasi biar ada tmpt buat hasilnya
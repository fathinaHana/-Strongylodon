//Ini loop For
for (let num = 0; num < 10; num++) {
    console.log("Number " + num);
}

//Ini loop for in
let reverse = {name : "Eternity", age : 100, class : "Mineral Arcanist"};

for(let num in reverse) {
    console.log(kunci + "+ " + reverse[num]);
}

//Ini loop for of
let animals = ["Axolotl","Bear","Capybara","Deer"];

for(let animal of animals) {
    console.log("I Like " + animal);
}

//Ini loop while
number = 0;

while (number < 10) {
    console.log("Number " + number);
    number++; //maksud ada dua plus itu, tiap perputaran tambah satu
}

//Ini loop do while
number = 0;

do{
    console.log("Number " + number);
    number++;
}

while(number < 10);

//for- itu mengulang dengan jumlh pasti, [klo mau bikin sistem pembayan kasir/menu di toko online]
//for in- mengambil nama properti di objek, [cek form data, udang ngisi apa blum]
//for of- mengambil isi di string/array, [biasanya menu di toko online]
//while- ngulang selama kondisi benar, [klo mau bikin sistem pembayan kasir]
//do while- minimal klo sekali jalan, baru cek kondisinya [bisa bikin sistem sign up]


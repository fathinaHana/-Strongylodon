let morimens = ["Karen", "Helot","Daffodil","Ryker"]
// ini urutannya   0        1        2         3
//jd dimulai dr nol

let A3 = new Array("Yuki","Tenma","Itaru","Misumi");
console.log(A3)
//OUTPUT:
//Array(4) ["Yuki","Tenma","Itaru","Misumi"]

let morimens2 = ["Tawil", "Nymphea","Goliath","Pandia"]; //indexing
console.log(morimens2[2]);
//akan menampilkan goliath

let reverse2 = ["Click","Isolde","Jiu Niangzi","Argus"]; //rubah item
reverse2[2] = "Aleph";
console.log(reverse2);
//nanti si niangzi jadi aleph


// Array Method:

//length: itung berapa banyak item
let Arknights = new Array("Chongyue", "Hellagur","Mountain","Pallas");
Arknights.length;
// nanti bakalan keluar 4 (output)

//Pop: ngapus item terakhir
let idolish7 = new Array("Sougo","Tamaki","Izumi");
idolish7.pop();
console.log(idolish7);
//yg keluar ["Sougo","Tamaki"]

//Push: nambah item di urutan terakhir
let mesherz = ["Akina","Fuwa"];
mesherz.push("Mayuyu");
console.log(mesherz);
// yg keluar ["Akina","Fuwa","Mayuyu"]

//Shift: hapus item di awal
let nijiEN = ["Kyo","Uki","Sonny","Shu"];
nijiEN.shift();
console.log(nijiEN);
//YG KELUAR ["Uki","Sonny","Shu"]

//Unshift: nambah tp taro di awal
let twisted = ["Ace","Deuce","Trey","Cater"];
twisted.unshift("Riddle");
console.log(twisted);
//yg muncul ["Riddle","Ace","Deuce","Trey","Cater"]

//Slice: jadi motong, habis itu dijadiin array baru
let crazyracoon = ["Ras","Uruca","Amatsuki","Mondo"];
crazyracoon.slice(0,3);
//yg muncul array ["Ras","Mondo"]


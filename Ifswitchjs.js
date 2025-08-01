number = prompt("Masukkan Angka");

 if (number % 2 == 0) {
    alert("angka " + number + " Adalah Genap");
 } else {
    alert("angka " + number + " Adalah Ganjil");
 }

 HariIni = prompt("Bagaimana Cuaca Hari Ini?");

 if (HariIni == "hujan") {
    alert( "Jangan lupa pakai payung! Agar tidak kebasahan");
 } else if  (HariIni == "panas") {
    alert("Jangan lupa pakai payung! Agar tidak kepanasan");
 } else {
    alert("Tetap sedia payung ya!");
 }

 number = prompt("Masukkan Angka");

 mod = number % 2;

 switch (mod) {
    case 0:
        alert(number + " adalah angka genap");
        break;
    case 1:
        alert(number + " adalah angka ganjil");
        break;
    default:
        alert("Hanya menerima angka!");
        break;
 }
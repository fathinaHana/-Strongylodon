//DOM: Document Object Model

let btn  = document.getElementById(hitungbtn);
let result = document.getElementByid(result);

btn.onclick = function() {
    let berat = document.getElementByid(beratbmi).value;
    let tinggi = document.getElementByid(tinggibmi).value;

    berat = parseFloat(berat)
    tinggicm = parseFloat(tinggicm)

    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggicm <=0) {
        result.innerHTML = "MASUKKAN NILAI YANG VALID!"
        alert("MASUKKAN NILAI YANG VALID!")
        return;
    }

    let tinggiM = tinggicm
    let bmi = berat / (tinggiM * tinggiM);
    let kategori ="";

    if (bmi < 18.5) {
        kategori = "Kurus";
    } else if (bmi >= 18.5 && bmi<= 24.9) {
        kategori = "Normal";
    } else if (bmi >= 25 && bmi<= 29.9) {
        kategori = "Kelebihan Berat Badan";
    } else {
        kategori = "Obesitas";
    }

    result.innerHTML = "BMI Kamu: " + bmi.toFixed(2) + "->" + kategori ;
}
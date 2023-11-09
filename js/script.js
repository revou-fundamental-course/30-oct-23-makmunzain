function hitungBMI(){
    let beratBadan = document.getElementById("weight").value;
    let tinggiBadan = document.getElementById("height").value;

    let hasil = parseInt(beratBadan) / ((parseInt(tinggiBadan)/100)*(parseInt(tinggiBadan)/100));

    let cetakBMI = document.getElementById("angkaBMI");
    cetakBMI.textContent = hasil.toFixed(1);

    console.log(hasil)
    
    let kategoriBMI = document.getElementById("kategoriBMI");
    let keteranganBMI = document.getElementById("keteranganBMI");
    let judulHasil = document.getElementById("judulHasil");
    let rangeBMI = document.getElementById("rangeBMI");

    judulHasil.textContent="Hasil";

    let activeHasil = document.getElementById("hsl-bmi");
    activeHasil.style.display = "flex";

    if (hasil >= 30){
        kategoriBMI.textContent="Kegemukan (Obesitas)";
        keteranganBMI.textContent="Anda mengalami kegemukan";
        rangeBMI.textContent="Hasil BMI 30.0 atau lebih";
      } else if (hasil >= 25){
        kategoriBMI.textContent="Kelebihan berat badan";
        keteranganBMI.textContent="Anda memiliki berat badan berlebih";
        rangeBMI.textContent="Hasil BMI diantara 25.0 dan 29.9";
      } else if (hasil >= 18.5){
        kategoriBMI.textContent="Normal (Ideal)";
        keteranganBMI.textContent="Anda memiliki berat badan normal";
        rangeBMI.textContent="Hasil BMI diantara 18.5 dan 24.9";
      } else {
        kategoriBMI.textContent="Kekurangan berat badan";
        keteranganBMI.textContent="Anda mengalami kekurangan berat badan";
        rangeBMI.textContent="Hasil BMI kurang dari 18.5";
      }
}

function resetBMI(){
    let beratBadan = document.getElementById("weight");
    let tinggiBadan = document.getElementById("height");
    let usia = document.getElementById("age");
    let pria = document.getElementById("pria");
    let wanita = document.getElementById("wanita");

    let hapusBMI = document.getElementById("angkaBMI");
    hapusBMI.textContent = "";

    let kategoriBMI = document.getElementById("kategoriBMI");
    kategoriBMI.textContent = "";

    let keteranganBMI = document.getElementById("keteranganBMI");
    keteranganBMI.textContent = "";

    let judulHasil = document.getElementById("judulHasil");
    judulHasil.textContent = "";

    let rangeBMI = document.getElementById("rangeBMI");
    rangeBMI.textContent = "";

    let activeHasil = document.getElementById("hsl-bmi");
    activeHasil.style.display = "none";

    pria.checked = pria.false;
    wanita.checked = wanita.false;
    beratBadan.value = beratBadan.removeValue;
    tinggiBadan.value = tinggiBadan.removeValue;
    usia.value = usia.removeValue;
}
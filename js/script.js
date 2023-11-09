function hitungBMI(){
    let beratBadan = document.getElementById("weight").value;
    let tinggiBadan = document.getElementById("height").value;

    let hasil = parseInt(beratBadan) / ((parseInt(tinggiBadan)/100)*(parseInt(tinggiBadan)/100));

    let cetakBMI = document.getElementById("angkaBMI");
    cetakBMI.textContent = hasil.toFixed(1);

    console.log(hasil)
    
    let kategoriBMI = document.getElementById("kategoriBMI");

    if (hasil >= 30){
        kategoriBMI.textContent="Kegemukan (Obesitas)";
      } else if (hasil >= 25){
        kategoriBMI.textContent="Kelebihan berat badan";
      } else if (hasil >= 18.5){
        kategoriBMI.textContent="Normal (Ideal)";
      } else {
        kategoriBMI.textContent="Kekurangan berat badan";
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

    pria.checked = pria.false;
    wanita.checked = wanita.false;
    beratBadan.value = beratBadan.removeValue;
    tinggiBadan.value = tinggiBadan.removeValue;
    usia.value = usia.removeValue;
}
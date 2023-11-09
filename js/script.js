function hitungBMI(){
    let beratBadan = document.getElementById("weight").value;
    let tinggiBadan = document.getElementById("height").value;

    let hasil = parseInt(beratBadan) / ((parseInt(tinggiBadan)/100)*(parseInt(tinggiBadan)/100));

    let cetakBMI = document.getElementById("angkaBMI");
    cetakBMI.textContent = hasil.toFixed(1);

    console.log(hasil)
    
    let kategoriBMI = document.getElementById("kategoriBMI");
    let keteranganBMI = document.getElementById("keteranganBMI");

    if (hasil >= 30){
        kategoriBMI.textContent="Kegemukan (Obesitas)";
        keteranganBMI.textContent="Anda mengalami kegemukan";
      } else if (hasil >= 25){
        kategoriBMI.textContent="Kelebihan berat badan";
        keteranganBMI.textContent="Anda memiliki berat badan berlebih";
      } else if (hasil >= 18.5){
        kategoriBMI.textContent="Normal (Ideal)";
        keteranganBMI.textContent="Anda memiliki berat badan normal";
      } else {
        kategoriBMI.textContent="Kekurangan berat badan";
        keteranganBMI.textContent="Anda mengalami kekurangan berat badan";
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

    pria.checked = pria.false;
    wanita.checked = wanita.false;
    beratBadan.value = beratBadan.removeValue;
    tinggiBadan.value = tinggiBadan.removeValue;
    usia.value = usia.removeValue;
}
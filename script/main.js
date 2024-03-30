// Luas Lingkaran
let btnLing = document
  .getElementById("btnLing")
  .addEventListener("click", luasLingkaran);

function luasLingkaran() {
  let inpJariJari = document.getElementById("jrjr").value;
  let hasilLuas = document.getElementById("luasLing");
  
  // Memeriksa apakah input adalah integer
  if (Number.isInteger(Number(inpJariJari))) {
    hasilLuas.innerHTML = 3.14 * inpJariJari * inpJariJari + "cm2";
  } else {
    alert("Mohon masukkan angka yang valid.");
  }
}

// Luas Segitiga
let btnSegitiga = document
  .getElementById("btnSegitiga")
  .addEventListener("click", luasSegitiga);

function luasSegitiga() {
  let alas3 = document.getElementById("inpAlasS").value;
  let tinggi3 = document.getElementById("inpTinggiS").value;
  let luasSegi3 = document.getElementById("hasilSegitiga");
  
  // Memeriksa apakah input adalah integer
  if (Number.isInteger(Number(alas3)) && Number.isInteger(Number(tinggi3))) {
    luasSegi3.innerHTML = (alas3 * tinggi3) / 2 + "cm2";
  } else {
    alert("Mohon masukkan angka yang valid.");
  }
}

// Luas Persegi Panjang
let btnPp = document
  .getElementById("btnPp")
  .addEventListener("click", luasPersegiPanjang);

function luasPersegiPanjang() {
  let panjang4 = document.getElementById("inpPanjang").value;
  let lebar4 = document.getElementById("inpLebar").value;
  let hasilPp = document.getElementById("hasilPp");
  
  // Memeriksa apakah input adalah integer
  if (Number.isInteger(Number(panjang4)) && Number.isInteger(Number(lebar4))) {
    hasilPp.innerHTML = panjang4 * lebar4 + "cm2";
  } else {
    alert("Mohon masukkan angka yang valid.");
  }
}

// Luas Jajar Genjang
let btnJg = document
  .getElementById("btnJg")
  .addEventListener("click", luasJajargejang);

function luasJajargejang() {
  let alas4 = document.getElementById("inpAlasJg").value;
  let tinggi4 = document.getElementById("inpTinggiJg").value;
  let luasJg = document.getElementById("hasilJg");
  
  // Memeriksa apakah input adalah integer
  if (Number.isInteger(Number(alas4)) && Number.isInteger(Number(tinggi4))) {
    luasJg.innerHTML = alas4 * tinggi4 + "cm2";
  } else {
    alert("Mohon masukkan angka yang valid.");
  }
}






//Luas Lingkaran
let btnLing = document.getElementById('btnLing').addEventListener('click', luasLingkaran);

function luasLingkaran() {
    let inpJariJari = document.getElementById ("jrjr").value;
    let hasilLuas = document.getElementById("luasLing");
    hasilLuas.innerHTML= 3.14 * inpJariJari * inpJariJari +'cm2';
}

//Luas Segitiga
let btnSegitiga = document.getElementById('btnSegitiga').addEventListener('click', luasSegitiga);

function luasSegitiga() {
    let alas3 = document.getElementById('inpAlasS').value;
    let tinggi3 = document.getElementById('inpTinggiS').value;
    let luasSegi3 = document.getElementById('hasilSegitiga');
    luasSegi3.innerHTML= alas3 * tinggi3 / 2+'cm2'
}

//Luas Persegi Panjang
let btnPp = document.getElementById('btnPp').addEventListener('click', luasPersegiPanjang);

function luasPersegiPanjang() {
    let panjang4 = document.getElementById('inpPanjang').value;
    let lebar4 = document.getElementById('inpLebar').value;
    let hasilPp = document.getElementById('hasilPp');
    hasilPp.innerHTML = panjang4 * lebar4 + 'cm2'
}

//Luas Segitiga
let btnJg = document.getElementById('btnJg').addEventListener('click', luasJajargejang);

function luasJajargejang() {
    let alas4 = document.getElementById('inpAlasJg').value;
    let tinggi4 = document.getElementById('inpTinggiJg').value;
    let luasJg = document.getElementById('hasilJg');
    luasJg.innerHTML= alas4 * tinggi4 +'cm2'
}
















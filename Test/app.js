const kutu = document.querySelector("#box");
const BaslaButton = document.querySelector("#basla");
const SonrakiSoruButton = document.querySelector("#sonraki");
const BitirButton = document.querySelector("#bitir");
let HangiIslem = document.querySelector("#islem");
let sayi1 = document.querySelector("#sayi1");
let sayi2 = document.querySelector("#sayi2");
const CevaplaButton = document.querySelector("#gonder");
let GirilenDeger = document.querySelector("#cevap");
const mesaj1 = document.querySelector("#bilgi1");
const mesaj2 = document.querySelector("#bilgi2");
let skor = document.querySelector("#skor");
const baslik = document.querySelector("#baslik");


let kacinci = 1;
let DogruSayisi = 0;
let sonuc;
kutu.style.display = "none";
SonrakiSoruButton.style.display ="none";

BaslaButton.addEventListener("click",baslat);
SonrakiSoruButton.addEventListener("click",ilerle);
BitirButton.addEventListener("click",bitir);
CevaplaButton.addEventListener("click",cevapla);

function baslat() {
    GirilenDeger.value == "";
    baslik.innerText = "SORU - " + kacinci;
    sayi1 = Math.floor(Math.random()*9) + 1;
    sayi2 = Math.floor(Math.random()*9) + 1;

    BaslaButton.style.display = "none";
    kutu.style.display = "block";

    let IslemCesidi = Math.floor(Math.random() *3 ) +1;
    if(IslemCesidi == 1) {
        toplama();
    } else if (IslemCesidi == 2) {
        cikarma();
    } else if(IslemCesidi == 3) {
        carpma();
    } else if(IslemCesidi == 4) {
        bolme();
    }
}

function bitir() {
    let kontrol = confirm("Emin misiniz? (Skorunuz Sıfırlanacaktır)");
    if(kontrol == true) {
        kacinci = 1;
        baslik.innerHTML = "Doğru sayısı: " + DogruSayisi;
        kutu.style.display = "none";
        BaslaButton.style.display ="block";
    }
}

function toplama() {
    HangiIslem.innerText = "+";
    document.querySelector("#sayi1").innerText = sayi1;
    document.querySelector("#sayi2").innerText = sayi2;
    sonuc = Number(sayi1) + Number(sayi2);
}

function cikarma() {
    HangiIslem.innerText = "-";
    document.querySelector("#sayi1").innerText = sayi1;
    document.querySelector("#sayi2").innerText = sayi2;
    sonuc = Number(sayi1) - Number(sayi2);
}

function carpma() {
    HangiIslem.innerText = "*";
    document.querySelector("#sayi1").innerText = sayi1;
    document.querySelector("#sayi2").innerText = sayi2;
    sonuc = Number(sayi1) * Number(sayi2);
}

function bolme() {
    HangiIslem.innerText = "/";
    document.querySelector("#sayi1").innerText = sayi1;
    document.querySelector("#sayi2").innerText = sayi2;
    sonuc = Number(sayi1) / Number(sayi2);
}

function cevapla() {
    if(GirilenDeger.value == " ") {
        alert("Lütfen Bir değer giriniz.");
    } else {
        if(GirilenDeger.value == sonuc) {
            DogruSayisi = DogruSayisi + 1;
            console.log("doğru");
            kutu.style.display = "none";
            SonrakiSoruButton.style.display = "block";
            mesaj1.style.display ="block";
        } else {
            console.log("yanlış");
            kutu.style.display = "none";
            SonrakiSoruButton.style.display ="block";
            mesaj2.style.display ="block";
        }
    }
}


function ilerle() {
    mesaj1.style.display = "none";
    kacinci = kacinci + 1;
    baslik.innerText = "SORU - " + kacinci;
    mesaj2.style.display = "none";
    SonrakiSoruButton.style.display = "none";
    kutu.style.display = "block";
    GirilenDeger.value = " ";
    sayi1 = Math.floor(Math.random() * 9) +1;
    sayi2 = Math.floor(Math.random()* 9) + 1;
    document.querySelector("#sayi1").innerText = sayi1;
    document.querySelector("#sayi2").innerText = sayi2;
    skor.innerHTML = "Doğru Sayısı: " + DogruSayisi;

    IslemCesidi = Math.floor(Math.random() *3) +1;
    if (IslemCesidi == 1) {
        toplama();
    } else if (IslemCesidi == 2) {
        cikarma();
    } else if (IslemCesidi == 3) {
        carpma();
    } else if(IslemCesidi ==4) {
        bolme();
    }
}
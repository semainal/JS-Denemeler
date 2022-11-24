let secim = document.querySelector("#box").children;
let sonuc = document.querySelector("#sonuc");
let clean = document.querySelector("#clean");
let hesap = document.querySelector("#hesapla");


clean.addEventListener("click", temizle);
hesap.addEventListener("click", hesapla);


for (var i = 0; i < 16; i++) {
    if (i != 12 && i != 14) { // "temizle" ve "hesapla" butonları hariç tutuldu.
        secim[i].addEventListener("click", yazdir);
    }
}

function hesapla() {
    sonuc.innerText = eval(sonuc.innerText);
    if (eval(sonuc.innerText.length) > 8) { // Çıkan sonuç 8 basamaktan büyükse 8 basamak olarak girdirildi.
        sonuc.innerText = eval(sonuc.innerText).toPrecision(8);
    }
}


function temizle() {
    sonuc.innerText = " ";
}


function yazdir() {
    if (sonuc.innerText.length < 8) // 8 basamaktan fazla olması engellendi. 
        sonuc.innerText = sonuc.innerText + this.innerText;
}
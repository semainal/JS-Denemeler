let name = document.querySelector("#name");
let surname = document.querySelector("#surname");

let vize = document.querySelector("#txtVize");
let final = document.querySelector("#txtFinal");
let btnHesap = document.querySelector("#hesap");

btnHesap.addEventListener("click", hesapla)

function hesapla() {
    let sonuc = "";
    let puan = "";
    let vizeNotu = Number(vize.value);
    let finalNotu = Number(final.value);
    let ortalama = (vizeNotu * 0.40) + (finalNotu * 0.60);
    

   
    if(finalNotu<50) {
        sonuc= "Final Notunuz 50'nin altında. Dersten Kaldınız."
        puan="FF"
    } else {
        if(vizeNotu>0 && vizeNotu<50) {
            puan = "FF";
        } else if (ortalama>=50 && ortalama <=55) {
            sonuc ="Dersi başarıyla geçtiniz."
            puan = "DD";
        } else if (ortalama >55 && ortalama <=65) {
            sonuc ="Dersi başarıyla geçtiniz."
            puan= "DC";
        } else if (ortalama >65 && ortalama <=70) {
            sonuc ="Dersi başarıyla geçtiniz."
            puan="CC";
        } else if (ortalama >70 && ortalama <=75) {
            sonuc ="Dersi başarıyla geçtiniz."
            puan = "BC";
        } else if (ortalama > 75 && ortalama <=80) {
            sonuc ="Dersi başarıyla geçtiniz."
            puan ="BB";
        } else if(ortalama >80 && ortalama <=90) {
            sonuc ="Dersi başarıyla geçtiniz."
            puan = "BA";
        } else if(ortalama >90) {
            sonuc ="Dersi başarıyla geçtiniz."
            puan ="AA";
        }
    }
    

    document.querySelector("#lblSonuc").innerHTML ="Ortalamanız: " + ortalama+"<BR>"+ sonuc;
    document.querySelector("#lblPuan").innerHTML = "Puanınız: " + puan
}
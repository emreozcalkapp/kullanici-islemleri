// Kullanıcı Listesi Tanımlama: Başlangıçta users dizisinde bazı kullanıcılar tanımlanır.
// İşlem Seçimi: Kullanıcıdan "giriş", "kayıt" veya "çık" seçeneklerinden birini seçmesi istenir.
// Giriş Yapma: Kullanıcı adı ve şifre girilerek, sistemdeki kullanıcılarla karşılaştırılır. Eğer doğruysa giriş başarılıdır.
// Kayıt Olma: Yeni bir kullanıcı adı ve şifre ile kayıt yapılır. Ancak, kullanıcı adı daha önce alınmışsa, başka bir ad seçmesi istenir.
// Çıkış Yapma: "Çık" komutu ile program sonlanır.



const kullanicilar = [
    {
        id:1,
        kullaniciAd:"emreozcalkap",
        kullaniciSifre: "0987"
    },
    {
        id:2,
        kullaniciAd:"gorkemsuslu",
        kullaniciSifre: "4567"
    },
    {
        id:3,
        kullaniciAd:"emirunal",
        kullaniciSifre: "1234"
    }
];

const islemSecim = prompt(`Yapmak istediğiniz işlemi seçiniz \n Giriş Yap \n Kayıt Ol \n Çıkış Yap`).toLocaleLowerCase("tr");

if(islemSecim === "giriş yap"){
    
    let girisAd = prompt("Kullanıcı adınızı giriniz")
    let girisSifre = prompt("Kullanıcı şifrenizi giriniz");

    for (let index = 0; index < kullanicilar.length; index++) {
        const kullanici = kullanicilar[index];
        if(kullanici.kullaniciAd === girisAd && kullanici.kullaniciSifre === girisSifre){
            alert("Giriş başarılı");
        }
        else{
            alert("Giriş başarısız");
        }
        break;
    }
}

else if(islemSecim === "kayıt ol"){
    
    let yeniAd = prompt("Kullanıcı adı oluşturunuz");
    let kullaniciVarmi = false;
    for (let index = 0; index < kullanicilar.length; index++) {
        const kullanici = kullanicilar[index];
        if(kullanici.kullaniciAd === yeniAd){
            kullaniciVarmi = true;
        }
        }
        if(kullaniciVarmi){
            alert("Kullanıcı adı kullanılıyor. Lütfen başka bir kullanıcı adı oluşturunuz");
       }
       else{
            let yeniSifre = prompt("Kullanıcı şifrenizi oluşturunuz");
            let yeniId = kullanicilar.length +1;
            kullanicilar.push({
            id: yeniId,
            kullaniciAd: yeniAd,
            kullaniciSifre: yeniSifre
            });
            alert("Kullanıcı başarıyla eklendi");
            console.log(kullanicilar);
       }
    }
    
else if(islemSecim === "çıkış yap"){
    alert("Çıkış yapıldı.");
}

else{
    alert("Geçersiz seçenek girdiniz.");
}
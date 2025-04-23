const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sehir = form.sehir.value.trim();
    
    sehirGuncelle(sehir).then((veri) => {
        console.log(veri);
    });

    form.reset();
});

const sehirGuncelle = async (sehir) => {
    const sehirDetay = await sehirGetir(sehir);
    const havaDurumu = await havaDurumuGetir(sehirDetay.Key);
    
    return {   
        sehirDetay: sehirDetay,
        havaDurumu: havaDurumu
    };
};

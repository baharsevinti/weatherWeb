const key ='P9r9AYnFr4LPi1PPacFPCOcuharHLulu';
const havaDurumuGetir=async (Id)=>{
    const temelUrl='http://dataservice.accuweather.com/currentconditions/v1/';
    const sorgu=`${Id}?apikey=${key}`;
    const res= await fetch(temelUrl+sorgu);
    const veri= await res.json();
    return veri;
    
}

const sehirGetir=async(konum)=>{
    const temelUrl='http://dataservice.accuweather.com/locations/v1/cities/search';
    const sorgu=`?apikey=${key}&q=${konum}`;
    const res= await fetch(temelUrl+sorgu);
    const veri= await res.json();
    console.log(veri);
    return veri[0]; // burada return ekleniyor
};

sehirGetir('adana').then((veri)=>{
   
    return havaDurumuGetir(veri.Key);
}).then((veri)=>{
    console.log(veri);
}).catch((hata)=>{
    console.log('Hata:', hata);
});



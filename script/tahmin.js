const key ='P9r9AYnFr4LPi1PPacFPCOcuharHLulu';
const sehirGetir=async(konum)=>{
    const temelUrl='http://dataservice.accuweather.com/locations/v1/cities/search';
    const sorgu=`?apikey=${key}&q=${konum}`;
    const res= await fetch(temelUrl+sorgu);
    const veri= await res.json();
    console.log(veri);
};
sehirGetir('adana').then((veri)=>{
    console.log(veri);
}

);


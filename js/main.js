var apikey = {
    key: '81737b62-efa5-4763-b837-eca46184c65f'
}

fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+apikey.key
).then((response)=>{
    if(!response.ok){
        throw new Error('Erro ao Executar, Status '+ response.status);
    }
    return response.json;
 }).then((api)=>{
    //console.log(api);
    var texto = "";
    for (let i = 0; i < 10; i++) {
        texto = texto+`
            <div class="media">
                <img src="coin.jpg" class="align-center mr-3" alt="coin" width="100" height="60">
                <div class = "media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].fist_historical_data}</p>
                </div>
            </div>
        `;
    }
    document.getElementById('coins').innerHTML = texto;
 }).catch((error)=>{
     console.error(error.message);
 });
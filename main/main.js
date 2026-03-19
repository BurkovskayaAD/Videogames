let apiKey = '0fc5072e9d5f45a29c5718c6d74bcf2a';
let URL = 'https://api.rawg.io/api/games?key=0fc5072e9d5f45a29c5718c6d74bcf2a';

async function fetchData(URL, apiKey ) {
    try {
        let response = await fetch(URL, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        let data = await response.json();
        return data;
    } catch (error) {
    console.error('Ошибка:', error);
    }
}
fetchData(URL,apiKey).then(data => console.log(data))



// async function getGameById(id,URL,apiKey){

//         let url = (id) => `URL/${id}`
//         try {
//             let response = await fetch(URL, {
//                 headers: { 'Authorization': `Bearer ${apiKey}` }
//             });
//             let data = await response.json();
//             return data;
//     } catch (error) {
//     console.error('Ошибка:', error);
//     }
// }

// getGameById(id,URL,apiKey).then(data => console.log(data));
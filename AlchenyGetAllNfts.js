import fetch from 'node-fetch';
import dotenv from 'dotenv/config'
import  fsLibrary from 'fs'
let key= process.env.AlchemyKey
console.log(key)

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const walletAddresses=[];
  const apiKey = "wRHdV3DbjKP9JSAUFiTEuezb1TCAaxgC"
  const baseURL = `https://polygon-mainnet.g.alchemy.com/${key}/getOwnersForCollection`;
  const contractAddr = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d";
  const fetchURL = `${baseURL}?contractAddress=${contractAddr}`;

 
 async function getOwners()
 {





 await  fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response,null,2))
    .then(result =>{
      let res=JSON.parse(result).ownerAddresses;
      console.log("Result",res)
        fsLibrary.writeFile('WalletAddresses.txt',JSON.stringify(res), (error) => {
      
            // In case of a error throw err exception.
            if (error) throw err;
        })
walletAddresses.push(result)

    console.log(result)
    })
}

await getOwners();
 //console.log(walletAddresses[ownerAddresses])
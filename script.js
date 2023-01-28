const freeKey = "EK-cgMkq-f79VYYW-u1JY5";
const freeKey2 = "EK-pfZvx-FosL1Um-w77mG";
const freeKey3= "EK-22krG-VXcvgYY-jyyuo"
const freeKey4= "EK-6wZSf-zBCHfyy-ESj99"
const freekey5= "EK-af3uZ-LcuHf73-d1WJu"
const freekey6="EK-8RsfJ-ckCnNW5-ddbmS"
const address = "0x2e311fAeb44d4781f932eEd293ED59Fd629D1ba5"
let addy = ""
let h1 = document.getElementById("heading")


let num = 0
let sum =0
async function getapi(url) {
    
    const response = await fetch(url);
    var data = await response.json();
   const maal = data.holders;
   const asliMaal = maal.map(obj => obj.address) 

  asliMaal.forEach((obj,i) => {
    

    async function getTx(freeKey) {

      const url = `https://api.ethplorer.io/getAddressInfo/${obj}?apiKey=${freeKey}&showETHTotals=false`

            const res = await fetch(url)
 
            var data = await res.json();
            totalTx = data.countTxs
            if(totalTx< 10) {
               sum = sum+ 1 
               addy= `https://etherscan.io/address/${data.address}`
               console.log(addy)
            }
  
           const percentage = (sum/asliMaal.length)*100
           h1.innerHTML = `Total New Wallet = ${sum} and total wallet checked ${asliMaal.length}`


    
    }
    if(i<9) {
        getTx(freeKey)
    }
     if(i>=10&& i<20) {
         getTx(freeKey2)
     }
      if(i>=20 && i<30) {
        getTx(freeKey3)
      }
      if(i>=30 && i<40) {
         getTx(freeKey4)
      }
      if(i>=40 && i<50) {
        getTx(freekey5);
      }
      if(i>=50 && i<60) {
        getTx(freekey6)
      }
  })
}

//getapi(apiUrl)


const grab = document.getElementById("ca")
const btn = document.getElementsByClassName("btn")


btn[0].addEventListener("click", ()=> {
  let ca = grab.value
  const apiUrl = `https://api.ethplorer.io/getTopTokenHolders/${ca}?apiKey=${freeKey}&limit=60`;
  console.log(apiUrl)
  getapi(apiUrl);

});

let wscbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
let changePriceChangeElementbtc = document.getElementById('PriceChange-change-btc');
let lastPriceChangebtc = null;
wscbtc.onmessage = (event) => {
  let changeObject = JSON.parse(event.data);
  let PriceChangebtc = parseFloat(changeObject.p).toFixed(3);
  changePriceChangeElementbtc.innerText = PriceChangebtc + ' $';
  changePriceChangeElementbtc.style.color = !lastPriceChangebtc || lastPriceChangebtc === PriceChangebtc ? 'black' : PriceChangebtc > lastPriceChangebtc ? 'green' : 'red' ;
  lastPriceChangebtc = PriceChangebtc;
} 

let wsceth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
let changePriceChangeElementeth = document.getElementById('PriceChange-change-eth');
let lastPriceChangeeth = null;
wsceth.onmessage = (event) => {
  let changeObject = JSON.parse(event.data);
  let PriceChangeeth = parseFloat(changeObject.p).toFixed(3);
  changePriceChangeElementeth.innerText = PriceChangeeth + ' $';
  changePriceChangeElementeth.style.color = !lastPriceChangeeth || lastPriceChangeeth === PriceChangeeth ? 'black' : PriceChangeeth > lastPriceChangeeth ? 'green' : 'red' ;
  lastPriceChangeeth = PriceChangeeth;
} 

let wscltc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@ticker');
let changePriceChangeElementltc = document.getElementById('PriceChange-change-ltc');
let lastPriceChangeltc = null;
wscltc.onmessage = (event) => {
  let changeObject = JSON.parse(event.data);
  let PriceChangeltc = parseFloat(changeObject.p).toFixed(3);
  changePriceChangeElementltc.innerText = PriceChangeltc + ' $';
  changePriceChangeElementltc.style.color = !lastPriceChangeltc || lastPriceChangeltc === PriceChangeltc ? 'black' : PriceChangeltc > lastPriceChangeltc ? 'green' : 'red' ;
  lastPriceChangeltc = PriceChangeltc;
} 

let wscxmr = new WebSocket('wss://stream.binance.com:9443/ws/xmrusdt@ticker');
let changePriceChangeElementxmr = document.getElementById('PriceChange-change-xmr');
let lastPriceChangexmr = null;
wscxmr.onmessage = (event) => {
  let changeObject = JSON.parse(event.data);
  let PriceChangexmr = parseFloat(changeObject.p).toFixed(3);
  changePriceChangeElementxmr.innerText = PriceChangexmr + ' $';
  changePriceChangeElementxmr.style.color = !lastPriceChangexmr || lastPriceChangexmr === PriceChangexmr ? 'black' : PriceChangexmr > lastPriceChangexmr ? 'green' : 'red' ;
  lastPriceChangexmr = PriceChangexmr;
} 
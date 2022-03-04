let wsltc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
let stockPriceElementltc = document.getElementById('stock-price-ltc-usdt');
let lastPriceltc = null;
wsltc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceltc = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementltc.innerText = priceltc;
  stockPriceElementltc.style.color = !lastPriceltc || lastPriceltc === priceltc ? 'black' : priceltc > lastPriceltc ? 'green' : 'red' ;
  lastPriceltc = priceltc;
}

let wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElementbtc = document.getElementById('stock-price-btc-usdt');
let lastPricebtc = null;
wsbtc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebtc = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementbtc.innerText = pricebtc;
  stockPriceElementbtc.style.color = !lastPricebtc || lastPricebtc === pricebtc ? 'black' : pricebtc > lastPricebtc ? 'green' : 'red' ;
  lastPricebtc = pricebtc;
}

let wseth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElementeth = document.getElementById('stock-price-eth-usdt');
let lastPriceeth = null;
wseth.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceeth = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementeth.innerText = priceeth;
  stockPriceElementeth.style.color = !lastPriceeth || lastPriceeth === priceeth ? 'black' : priceeth > lastPriceeth ? 'green' : 'red' ;
  lastPriceeth = priceeth;
}

let wsbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let stockPriceElementbnb = document.getElementById('stock-price-bnb-usdt');
let lastPricebnb = null;
wsbnb.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebnb = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementbnb.innerText = pricebnb;
  stockPriceElementbnb.style.color = !lastPricebnb || lastPricebnb === pricebnb ? 'black' : pricebnb > lastPricebnb ? 'green' : 'red' ;
  lastPricebnb = pricebnb;
}

let wsusdc = new WebSocket('wss://stream.binance.com:9443/ws/usdcusdt@trade');
let stockPriceElementusdc = document.getElementById('stock-price-usdc-usdt');
let lastPriceusdc = null;
wsusdc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceusdc = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementusdc.innerText = priceusdc;
  stockPriceElementusdc.style.color = !lastPriceusdc || lastPriceusdc === priceusdc ? 'black' : priceusdc > lastPriceusdc ? 'green' : 'red' ;
  lastPriceusdc = priceusdc;
}

let wsxrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let stockPriceElementxrp = document.getElementById('stock-price-xrp-usdt');
let lastPricexrp = null;
wsxrp.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricexrp = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementxrp.innerText = pricexrp;
  stockPriceElementxrp.style.color = !lastPricexrp || lastPricexrp === pricexrp ? 'black' : pricexrp > lastPricexrp ? 'green' : 'red' ;
  lastPricexrp = pricexrp;
}

let wsluna = new WebSocket('wss://stream.binance.com:9443/ws/lunausdt@trade');
let stockPriceElementluna = document.getElementById('stock-price-luna-usdt');
let lastPriceluna = null;
wsluna.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceluna = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementluna.innerText = priceluna;
  stockPriceElementluna.style.color = !lastPriceluna || lastPriceluna === priceluna ? 'black' : priceluna > lastPriceluna ? 'green' : 'red' ;
  lastPriceluna = priceluna;
}

let wssol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let stockPriceElementsol = document.getElementById('stock-price-sol-usdt');
let lastPricesol = null;
wssol.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricesol = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementsol.innerText = pricesol;
  stockPriceElementsol.style.color = !lastPricesol || lastPricesol === pricesol ? 'black' : pricesol > lastPricesol ? 'green' : 'red' ;
  lastPricesol = pricesol;
}

let wsada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
let stockPriceElementada = document.getElementById('stock-price-ada-usdt');
let lastPriceada = null;
wsada.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceada = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementada.innerText = priceada;
  stockPriceElementada.style.color = !lastPriceada || lastPriceada === priceada ? 'black' : priceada > lastPriceada ? 'green' : 'red' ;
  lastPriceada = priceada;
}

let wsavax = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade');
let stockPriceElementavax = document.getElementById('stock-price-avax-usdt');
let lastPriceavax = null;
wsavax.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceavax = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementavax.innerText = priceavax;
  stockPriceElementavax.style.color = !lastPriceavax || lastPriceavax === priceavax ? 'black' : priceavax > lastPriceavax ? 'green' : 'red' ;
  lastPriceavax = priceavax;
}

let wsdot = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade');
let stockPriceElementdot = document.getElementById('stock-price-dot-usdt');
let lastPricedot = null;
wsdot.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricedot = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementdot.innerText = pricedot;
  stockPriceElementdot.style.color = !lastPricedot || lastPricedot === pricedot ? 'black' : pricedot > lastPricedot ? 'green' : 'red' ;
  lastPricedot = pricedot;
}

let wsbusd = new WebSocket('wss://stream.binance.com:9443/ws/busdusdt@trade');
let stockPriceElementbusd = document.getElementById('stock-price-busd-usdt');
let lastPricebusd = null;
wsbusd.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebusd = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementbusd.innerText = pricebusd;
  stockPriceElementbusd.style.color = !lastPricebusd || lastPricebusd === pricebusd ? 'black' : pricebusd > lastPricebusd ? 'green' : 'red' ;
  lastPricebusd = pricebusd;
}

let wsdoge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let stockPriceElementdoge = document.getElementById('stock-price-doge-usdt');
let lastPricedoge = null;
wsdoge.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricedoge = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementdoge.innerText = pricedoge;
  stockPriceElementdoge.style.color = !lastPricedoge || lastPricedoge === pricedoge ? 'black' : pricedoge > lastPricedoge ? 'green' : 'red' ;
  lastPricedoge = pricedoge;
}

let wsshib = new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@trade');
let stockPriceElementshib = document.getElementById('stock-price-shib-usdt');
let lastPriceshib = null;
wsshib.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceshib = parseFloat(stockObject.p).toFixed(9);
  stockPriceElementshib.innerText = priceshib;
  stockPriceElementshib.style.color = !lastPriceshib || lastPriceshib === priceshib ? 'black' : priceshib > lastPriceshib ? 'green' : 'red' ;
  lastPriceshib = priceshib;
}

let wsmatic = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
let stockPriceElementmatic = document.getElementById('stock-price-matic-usdt');
let lastPricematic = null;
wsmatic.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricematic = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementmatic.innerText = pricematic;
  stockPriceElementmatic.style.color = !lastPricematic || lastPricematic === pricematic ? 'black' : pricematic > lastPricematic ? 'green' : 'red' ;
  lastPricematic = pricematic;
}
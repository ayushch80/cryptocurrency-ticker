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

let wslink = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@trade');
let stockPriceElementlink = document.getElementById('stock-price-link-usdt');
let lastPricelink = null;
wslink.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricelink = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementlink.innerText = pricelink;
  stockPriceElementlink.style.color = !lastPricelink || lastPricelink === pricelink ? 'black' : pricelink > lastPricelink ? 'green' : 'red' ;
  lastPricelink = pricelink;
}

let wsuni = new WebSocket('wss://stream.binance.com:9443/ws/uniusdt@trade');
let stockPriceElementuni = document.getElementById('stock-price-uni-usdt');
let lastPriceuni = null;
wsuni.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceuni = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementuni.innerText = priceuni;
  stockPriceElementuni.style.color = !lastPriceuni || lastPriceuni === priceuni ? 'black' : priceuni > lastPriceuni ? 'green' : 'red' ;
  lastPriceuni = priceuni;
}

let wsftm = new WebSocket('wss://stream.binance.com:9443/ws/ftmusdt@trade');
let stockPriceElementftm = document.getElementById('stock-price-ftm-usdt');
let lastPriceftm = null;
wsftm.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceftm = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementftm.innerText = priceftm;
  stockPriceElementftm.style.color = !lastPriceftm || lastPriceftm === priceftm ? 'black' : priceftm > lastPriceftm ? 'green' : 'red' ;
  lastPriceftm = priceftm;
}

let wstheta = new WebSocket('wss://stream.binance.com:9443/ws/thetausdt@trade');
let stockPriceElementtheta = document.getElementById('stock-price-theta-usdt');
let lastPricetheta = null;
wstheta.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricetheta = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementtheta.innerText = pricetheta;
  stockPriceElementtheta.style.color = !lastPricetheta || lastPricetheta === pricetheta ? 'black' : pricetheta > lastPricetheta ? 'green' : 'red' ;
  lastPricetheta = pricetheta;
}

let wsxtz = new WebSocket('wss://stream.binance.com:9443/ws/xtzusdt@trade');
let stockPriceElementxtz = document.getElementById('stock-price-xtz-usdt');
let lastPricextz = null;
wsxtz.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricextz = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementxtz.innerText = pricextz;
  stockPriceElementxtz.style.color = !lastPricextz || lastPricextz === pricextz ? 'black' : pricextz > lastPricextz ? 'green' : 'red' ;
  lastPricextz = pricextz;
}

let wsmkr = new WebSocket('wss://stream.binance.com:9443/ws/mkrusdt@trade');
let stockPriceElementmkr = document.getElementById('stock-price-mkr-usdt');
let lastPricemkr = null;
wsmkr.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricemkr = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementmkr.innerText = pricemkr;
  stockPriceElementmkr.style.color = !lastPricemkr || lastPricemkr === pricemkr ? 'black' : pricemkr > lastPricemkr ? 'green' : 'red' ;
  lastPricemkr = pricemkr;
}

let wsaave = new WebSocket('wss://stream.binance.com:9443/ws/aaveusdt@trade');
let stockPriceElementaave = document.getElementById('stock-price-aave-usdt');
let lastPriceaave = null;
wsaave.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceaave = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementaave.innerText = priceaave;
  stockPriceElementaave.style.color = !lastPriceaave || lastPriceaave === priceaave ? 'black' : priceaave > lastPriceaave ? 'green' : 'red' ;
  lastPriceaave = priceaave;
}

let wsrune = new WebSocket('wss://stream.binance.com:9443/ws/runeusdt@trade');
let stockPriceElementrune = document.getElementById('stock-price-rune-usdt');
let lastPricerune = null;
wsrune.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricerune = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementrune.innerText = pricerune;
  stockPriceElementrune.style.color = !lastPricerune || lastPricerune === pricerune ? 'black' : pricerune > lastPricerune ? 'green' : 'red' ;
  lastPricerune = pricerune;
}

let wscake = new WebSocket('wss://stream.binance.com:9443/ws/cakeusdt@trade');
let stockPriceElementcake = document.getElementById('stock-price-cake-usdt');
let lastPricecake = null;
wscake.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricecake = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementcake.innerText = pricecake;
  stockPriceElementcake.style.color = !lastPricecake || lastPricecake === pricecake ? 'black' : pricecake > lastPricecake ? 'green' : 'red' ;
  lastPricecake = pricecake;
}

let wsgrt = new WebSocket('wss://stream.binance.com:9443/ws/grtusdt@trade');
let stockPriceElementgrt = document.getElementById('stock-price-grt-usdt');
let lastPricegrt = null;
wsgrt.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricegrt = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementgrt.innerText = pricegrt;
  stockPriceElementgrt.style.color = !lastPricegrt || lastPricegrt === pricegrt ? 'black' : pricegrt > lastPricegrt ? 'green' : 'red' ;
  lastPricegrt = pricegrt;
}

let wscrv = new WebSocket('wss://stream.binance.com:9443/ws/crvusdt@trade');
let stockPriceElementcrv = document.getElementById('stock-price-crv-usdt');
let lastPricecrv = null;
wscrv.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricecrv = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementcrv.innerText = pricecrv;
  stockPriceElementcrv.style.color = !lastPricecrv || lastPricecrv === pricecrv ? 'black' : pricecrv > lastPricecrv ? 'green' : 'red' ;
  lastPricecrv = pricecrv;
}

let wslrc = new WebSocket('wss://stream.binance.com:9443/ws/lrcusdt@trade');
let stockPriceElementlrc = document.getElementById('stock-price-lrc-usdt');
let lastPricelrc = null;
wslrc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricelrc = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementlrc.innerText = pricelrc;
  stockPriceElementlrc.style.color = !lastPricelrc || lastPricelrc === pricelrc ? 'black' : pricelrc > lastPricelrc ? 'green' : 'red' ;
  lastPricelrc = pricelrc;
}

let wsbat = new WebSocket('wss://stream.binance.com:9443/ws/batusdt@trade');
let stockPriceElementbat = document.getElementById('stock-price-bat-usdt');
let lastPricebat = null;
wsbat.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebat = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementbat.innerText = pricebat;
  stockPriceElementbat.style.color = !lastPricebat || lastPricebat === pricebat ? 'black' : pricebat > lastPricebat ? 'green' : 'red' ;
  lastPricebat = pricebat;
}

let wscvx = new WebSocket('wss://stream.binance.com:9443/ws/cvxusdt@trade');
let stockPriceElementcvx = document.getElementById('stock-price-cvx-usdt');
let lastPricecvx = null;
wscvx.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricecvx = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementcvx.innerText = pricecvx;
  stockPriceElementcvx.style.color = !lastPricecvx || lastPricecvx === pricecvx ? 'black' : pricecvx > lastPricecvx ? 'green' : 'red' ;
  lastPricecvx = pricecvx;
}

let wsrose = new WebSocket('wss://stream.binance.com:9443/ws/roseusdt@trade');
let stockPriceElementrose = document.getElementById('stock-price-rose-usdt');
let lastPricerose = null;
wsrose.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricerose = parseFloat(stockObject.p).toFixed(6);
  stockPriceElementrose.innerText = pricerose;
  stockPriceElementrose.style.color = !lastPricerose || lastPricerose === pricerose ? 'black' : pricerose > lastPricerose ? 'green' : 'red' ;
  lastPricerose = pricerose;
}

let wsltc = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
let stockPriceElementltc = document.getElementById('stock-price-ltc-usdt');
let lastPriceltc = null;
wsltc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceltc = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementltc.innerText = '$ '+ priceltc;
  stockPriceElementltc.style.color = !lastPriceltc || lastPriceltc === priceltc ? 'black' : priceltc > lastPriceltc ? 'green' : 'red' ;
  lastPriceltc = priceltc;
}

let wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElementbtc = document.getElementById('stock-price-btc-usdt');
let lastPricebtc = null;
wsbtc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebtc = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementbtc.innerText = '$ '+ pricebtc;
  stockPriceElementbtc.style.color = !lastPricebtc || lastPricebtc === pricebtc ? 'black' : pricebtc > lastPricebtc ? 'green' : 'red' ;
  lastPricebtc = pricebtc;
}

let wseth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let stockPriceElementeth = document.getElementById('stock-price-eth-usdt');
let lastPriceeth = null;
wseth.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceeth = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementeth.innerText = '$ '+ priceeth;
  stockPriceElementeth.style.color = !lastPriceeth || lastPriceeth === priceeth ? 'black' : priceeth > lastPriceeth ? 'green' : 'red' ;
  lastPriceeth = priceeth;
}

let wsbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let stockPriceElementbnb = document.getElementById('stock-price-bnb-usdt');
let lastPricebnb = null;
wsbnb.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebnb = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementbnb.innerText = '$ '+ pricebnb;
  stockPriceElementbnb.style.color = !lastPricebnb || lastPricebnb === pricebnb ? 'black' : pricebnb > lastPricebnb ? 'green' : 'red' ;
  lastPricebnb = pricebnb;
}

let wsusdc = new WebSocket('wss://stream.binance.com:9443/ws/usdcusdt@trade');
let stockPriceElementusdc = document.getElementById('stock-price-usdc-usdt');
let lastPriceusdc = null;
wsusdc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceusdc = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementusdc.innerText = '$ '+ priceusdc;
  stockPriceElementusdc.style.color = !lastPriceusdc || lastPriceusdc === priceusdc ? 'black' : priceusdc > lastPriceusdc ? 'green' : 'red' ;
  lastPriceusdc = priceusdc;
}

let wsxrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let stockPriceElementxrp = document.getElementById('stock-price-xrp-usdt');
let lastPricexrp = null;
wsxrp.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricexrp = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementxrp.innerText = '$ '+ pricexrp;
  stockPriceElementxrp.style.color = !lastPricexrp || lastPricexrp === pricexrp ? 'black' : pricexrp > lastPricexrp ? 'green' : 'red' ;
  lastPricexrp = pricexrp;
}

let wsluna = new WebSocket('wss://stream.binance.com:9443/ws/lunausdt@trade');
let stockPriceElementluna = document.getElementById('stock-price-luna-usdt');
let lastPriceluna = null;
wsluna.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceluna = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementluna.innerText = '$ '+ priceluna;
  stockPriceElementluna.style.color = !lastPriceluna || lastPriceluna === priceluna ? 'black' : priceluna > lastPriceluna ? 'green' : 'red' ;
  lastPriceluna = priceluna;
}

let wssol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let stockPriceElementsol = document.getElementById('stock-price-sol-usdt');
let lastPricesol = null;
wssol.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricesol = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementsol.innerText = '$ '+ pricesol;
  stockPriceElementsol.style.color = !lastPricesol || lastPricesol === pricesol ? 'black' : pricesol > lastPricesol ? 'green' : 'red' ;
  lastPricesol = pricesol;
}

let wsada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
let stockPriceElementada = document.getElementById('stock-price-ada-usdt');
let lastPriceada = null;
wsada.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceada = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementada.innerText = '$ '+ priceada;
  stockPriceElementada.style.color = !lastPriceada || lastPriceada === priceada ? 'black' : priceada > lastPriceada ? 'green' : 'red' ;
  lastPriceada = priceada;
}

let wsavax = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade');
let stockPriceElementavax = document.getElementById('stock-price-avax-usdt');
let lastPriceavax = null;
wsavax.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceavax = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementavax.innerText = '$ '+ priceavax;
  stockPriceElementavax.style.color = !lastPriceavax || lastPriceavax === priceavax ? 'black' : priceavax > lastPriceavax ? 'green' : 'red' ;
  lastPriceavax = priceavax;
}

let wsdot = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade');
let stockPriceElementdot = document.getElementById('stock-price-dot-usdt');
let lastPricedot = null;
wsdot.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricedot = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementdot.innerText = '$ '+ pricedot;
  stockPriceElementdot.style.color = !lastPricedot || lastPricedot === pricedot ? 'black' : pricedot > lastPricedot ? 'green' : 'red' ;
  lastPricedot = pricedot;
}

let wsbusd = new WebSocket('wss://stream.binance.com:9443/ws/busdusdt@trade');
let stockPriceElementbusd = document.getElementById('stock-price-busd-usdt');
let lastPricebusd = null;
wsbusd.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebusd = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementbusd.innerText = '$ '+ pricebusd;
  stockPriceElementbusd.style.color = !lastPricebusd || lastPricebusd === pricebusd ? 'black' : pricebusd > lastPricebusd ? 'green' : 'red' ;
  lastPricebusd = pricebusd;
}

let wsdoge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let stockPriceElementdoge = document.getElementById('stock-price-doge-usdt');
let lastPricedoge = null;
wsdoge.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricedoge = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementdoge.innerText = '$ '+ pricedoge;
  stockPriceElementdoge.style.color = !lastPricedoge || lastPricedoge === pricedoge ? 'black' : pricedoge > lastPricedoge ? 'green' : 'red' ;
  lastPricedoge = pricedoge;
}

let wsshib = new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@trade');
let stockPriceElementshib = document.getElementById('stock-price-shib-usdt');
let lastPriceshib = null;
wsshib.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceshib = parseFloat(stockObject.p).toFixed(9);
  stockPriceElementshib.innerText = '$ '+ priceshib;
  stockPriceElementshib.style.color = !lastPriceshib || lastPriceshib === priceshib ? 'black' : priceshib > lastPriceshib ? 'green' : 'red' ;
  lastPriceshib = priceshib;
}

let wsmatic = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
let stockPriceElementmatic = document.getElementById('stock-price-matic-usdt');
let lastPricematic = null;
wsmatic.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricematic = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementmatic.innerText = '$ '+ pricematic;
  stockPriceElementmatic.style.color = !lastPricematic || lastPricematic === pricematic ? 'black' : pricematic > lastPricematic ? 'green' : 'red' ;
  lastPricematic = pricematic;
}

let wsnear = new WebSocket('wss://stream.binance.com:9443/ws/nearusdt@trade');
let stockPriceElementnear = document.getElementById('stock-price-near-usdt');
let lastPricenear = null;
wsnear.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricenear = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementnear.innerText = '$ '+ pricenear;
  stockPriceElementnear.style.color = !lastPricenear || lastPricenear === pricenear ? 'black' : pricenear > lastPricenear ? 'green' : 'red' ;
  lastPricenear = pricenear;
}

let wslink = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@trade');
let stockPriceElementlink = document.getElementById('stock-price-link-usdt');
let lastPricelink = null;
wslink.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricelink = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementlink.innerText = '$ '+ pricelink;
  stockPriceElementlink.style.color = !lastPricelink || lastPricelink === pricelink ? 'black' : pricelink > lastPricelink ? 'green' : 'red' ;
  lastPricelink = pricelink;
}

let wstrx = new WebSocket('wss://stream.binance.com:9443/ws/trxusdt@trade');
let stockPriceElementtrx = document.getElementById('stock-price-trx-usdt');
let lastPricetrx = null;
wstrx.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricetrx = parseFloat(stockObject.p).toFixed(6);
  stockPriceElementtrx.innerText = '$ '+ pricetrx;
  stockPriceElementtrx.style.color = !lastPricetrx || lastPricetrx === pricetrx ? 'black' : pricetrx > lastPricetrx ? 'green' : 'red' ;
  lastPricetrx = pricetrx;
}

let wsftt = new WebSocket('wss://stream.binance.com:9443/ws/fttusdt@trade');
let stockPriceElementftt = document.getElementById('stock-price-ftt-usdt');
let lastPriceftt = null;
wsftt.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceftt = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementftt.innerText = '$ '+ priceftt;
  stockPriceElementftt.style.color = !lastPriceftt || lastPriceftt === priceftt ? 'black' : priceftt > lastPriceftt ? 'green' : 'red' ;
  lastPriceftt = priceftt;
}

let wsbch = new WebSocket('wss://stream.binance.com:9443/ws/bchusdt@trade');
let stockPriceElementbch = document.getElementById('stock-price-bch-usdt');
let lastPricebch = null;
wsbch.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricebch = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementbch.innerText = '$ '+ pricebch;
  stockPriceElementbch.style.color = !lastPricebch || lastPricebch === pricebch ? 'black' : pricebch > lastPricebch ? 'green' : 'red' ;
  lastPricebch = pricebch;
}

let wssteth = new WebSocket('wss://stream.binance.com:9443/ws/stethusdt@trade');
let stockPriceElementsteth = document.getElementById('stock-price-steth-usdt');
let lastPricesteth = null;
wssteth.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricesteth = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementsteth.innerText = '$ '+ pricesteth;
  stockPriceElementsteth.style.color = !lastPricesteth || lastPricesteth === pricesteth ? 'black' : pricesteth > lastPricesteth ? 'green' : 'red' ;
  lastPricesteth = pricesteth;
}

let wsalgo = new WebSocket('wss://stream.binance.com:9443/ws/algousdt@trade');
let stockPriceElementalgo = document.getElementById('stock-price-algo-usdt');
let lastPricealgo = null;
wsalgo.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricealgo = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementalgo.innerText = '$ '+ pricealgo;
  stockPriceElementalgo.style.color = !lastPricealgo || lastPricealgo === pricealgo ? 'black' : pricealgo > lastPricealgo ? 'green' : 'red' ;
  lastPricealgo = pricealgo;
}

let wsxlm = new WebSocket('wss://stream.binance.com:9443/ws/xlmusdt@trade');
let stockPriceElementxlm = document.getElementById('stock-price-xlm-usdt');
let lastPricexlm = null;
wsxlm.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricexlm = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementxlm.innerText = '$ '+ pricexlm;
  stockPriceElementxlm.style.color = !lastPricexlm || lastPricexlm === pricexlm ? 'black' : pricexlm > lastPricexlm ? 'green' : 'red' ;
  lastPricexlm = pricexlm;
}

let wsftm = new WebSocket('wss://stream.binance.com:9443/ws/ftmusdt@trade');
let stockPriceElementftm = document.getElementById('stock-price-ftm-usdt');
let lastPriceftm = null;
wsftm.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceftm = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementftm.innerText = '$ '+ priceftm;
  stockPriceElementftm.style.color = !lastPriceftm || lastPriceftm === priceftm ? 'black' : priceftm > lastPriceftm ? 'green' : 'red' ;
  lastPriceftm = priceftm;
}

let wsuni = new WebSocket('wss://stream.binance.com:9443/ws/uniusdt@trade');
let stockPriceElementuni = document.getElementById('stock-price-uni-usdt');
let lastPriceuni = null;
wsuni.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceuni = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementuni.innerText = '$ '+ priceuni;
  stockPriceElementuni.style.color = !lastPriceuni || lastPriceuni === priceuni ? 'black' : priceuni > lastPriceuni ? 'green' : 'red' ;
  lastPriceuni = priceuni;
}

let wshbar = new WebSocket('wss://stream.binance.com:9443/ws/hbarusdt@trade');
let stockPriceElementhbar = document.getElementById('stock-price-hbar-usdt');
let lastPricehbar = null;
wshbar.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricehbar = parseFloat(stockObject.p).toFixed(4);
  stockPriceElementhbar.innerText = '$ '+ pricehbar;
  stockPriceElementhbar.style.color = !lastPricehbar || lastPricehbar === pricehbar ? 'black' : pricehbar > lastPricehbar ? 'green' : 'red' ;
  lastPricehbar = pricehbar;
}

let wsicp = new WebSocket('wss://stream.binance.com:9443/ws/icpusdt@trade');
let stockPriceElementicp = document.getElementById('stock-price-icp-usdt');
let lastPriceicp = null;
wsicp.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceicp = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementicp.innerText = '$ '+ priceicp;
  stockPriceElementicp.style.color = !lastPriceicp || lastPriceicp === priceicp ? 'black' : priceicp > lastPriceicp ? 'green' : 'red' ;
  lastPriceicp = priceicp;
}

let wsleo = new WebSocket('wss://stream.binance.com:9443/ws/leousdt@trade');
let stockPriceElementleo = document.getElementById('stock-price-leo-usdt');
let lastPriceleo = null;
wsleo.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceleo = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementleo.innerText = '$ '+ priceleo;
  stockPriceElementleo.style.color = !lastPriceleo || lastPriceleo === priceleo ? 'black' : priceleo > lastPriceleo ? 'green' : 'red' ;
  lastPriceleo = priceleo;
}

let wschz = new WebSocket('wss://stream.binance.com:9443/ws/chzusdt@trade');
let stockPriceElementchz = document.getElementById('stock-price-chz-usdt');
let lastPricechz = null;
wschz.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricechz = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementchz.innerText = '$ '+ pricechz;
  stockPriceElementchz.style.color = !lastPricechz || lastPricechz === pricechz ? 'black' : pricechz > lastPricechz ? 'green' : 'red' ;
  lastPricechz = pricechz;
}

let wsmana = new WebSocket('wss://stream.binance.com:9443/ws/manausdt@trade');
let stockPriceElementmana = document.getElementById('stock-price-mana-usdt');
let lastPricemana = null;
wsmana.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricemana = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementmana.innerText = '$ '+ pricemana;
  stockPriceElementmana.style.color = !lastPricemana || lastPricemana === pricemana ? 'black' : pricemana > lastPricemana ? 'green' : 'red' ;
  lastPricemana = pricemana;
}

let wsaxs = new WebSocket('wss://stream.binance.com:9443/ws/axsusdt@trade');
let stockPriceElementaxs = document.getElementById('stock-price-axs-usdt');
let lastPriceaxs = null;
wsaxs.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceaxs = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementaxs.innerText = '$ '+ priceaxs;
  stockPriceElementaxs.style.color = !lastPriceaxs || lastPriceaxs === priceaxs ? 'black' : priceaxs > lastPriceaxs ? 'green' : 'red' ;
  lastPriceaxs = priceaxs;
}

let wsetc = new WebSocket('wss://stream.binance.com:9443/ws/etcusdt@trade');
let stockPriceElementetc = document.getElementById('stock-price-etc-usdt');
let lastPriceetc = null;
wsetc.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceetc = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementetc.innerText = '$ '+ priceetc;
  stockPriceElementetc.style.color = !lastPriceetc || lastPriceetc === priceetc ? 'black' : priceetc > lastPriceetc ? 'green' : 'red' ;
  lastPriceetc = priceetc;
}

let wssand = new WebSocket('wss://stream.binance.com:9443/ws/sandusdt@trade');
let stockPriceElementsand = document.getElementById('stock-price-sand-usdt');
let lastPricesand = null;
wssand.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricesand = parseFloat(stockObject.p).toFixed(5);
  stockPriceElementsand.innerText = '$ '+ pricesand;
  stockPriceElementsand.style.color = !lastPricesand || lastPricesand === pricesand ? 'black' : pricesand > lastPricesand ? 'green' : 'red' ;
  lastPricesand = pricesand;
}

let wsvet = new WebSocket('wss://stream.binance.com:9443/ws/vetusdt@trade');
let stockPriceElementvet = document.getElementById('stock-price-vet-usdt');
let lastPricevet = null;
wsvet.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricevet = parseFloat(stockObject.p).toFixed(6);
  stockPriceElementvet.innerText = '$ '+ pricevet;
  stockPriceElementvet.style.color = !lastPricevet || lastPricevet === pricevet ? 'black' : pricevet > lastPricevet ? 'green' : 'red' ;
  lastPricevet = pricevet;
}

let wsfil = new WebSocket('wss://stream.binance.com:9443/ws/filusdt@trade');
let stockPriceElementfil = document.getElementById('stock-price-fil-usdt');
let lastPricefil = null;
wsfil.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricefil = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementfil.innerText = '$ '+ pricefil;
  stockPriceElementfil.style.color = !lastPricefil || lastPricefil === pricefil ? 'black' : pricefil > lastPricefil ? 'green' : 'red' ;
  lastPricefil = pricefil;
}

let wsosmo = new WebSocket('wss://stream.binance.com:9443/ws/osmousdt@trade');
let stockPriceElementosmo = document.getElementById('stock-price-osmo-usdt');
let lastPriceosmo = null;
wsosmo.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceosmo = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementosmo.innerText = '$ '+ priceosmo;
  stockPriceElementosmo.style.color = !lastPriceosmo || lastPriceosmo === priceosmo ? 'black' : priceosmo > lastPriceosmo ? 'green' : 'red' ;
  lastPriceosmo = priceosmo;
}

let wsceth = new WebSocket('wss://stream.binance.com:9443/ws/cethusdt@trade');
let stockPriceElementceth = document.getElementById('stock-price-ceth-usdt');
let lastPriceceth = null;
wsceth.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let priceceth = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementceth.innerText = '$ '+ priceceth;
  stockPriceElementceth.style.color = !lastPriceceth || lastPriceceth === priceceth ? 'black' : priceceth > lastPriceceth ? 'green' : 'red' ;
  lastPriceceth = priceceth;
}

let wsxmr = new WebSocket('wss://stream.binance.com:9443/ws/xmrusdt@trade');
let stockPriceElementxmr = document.getElementById('stock-price-xmr-usdt');
let lastPricexmr = null;
wsxmr.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let pricexmr = parseFloat(stockObject.p).toFixed(3);
  stockPriceElementxmr.innerText = '$ '+ pricexmr;
  stockPriceElementxmr.style.color = !lastPricexmr || lastPricexmr === pricexmr ? 'black' : pricexmr > lastPricexmr ? 'green' : 'red' ;
  lastPricexmr = pricexmr;
}
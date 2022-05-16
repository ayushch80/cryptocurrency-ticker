      var myForm = document.getElementById("form");
      var url = "https://api.blockcypher.com/v1/eth/main/txs/" + text;
      $.getJSON(url, function(data) {
        var tx_val = data.total
        var tx_value = tx_val / 1000000000000000000
        var text = `<h1>DATA FOR TX HASH</h1>
                    TX HASH: 0x${data.hash}<br>
                    BLOCK HASH: 0x${data.block_hash}<br>
                    BLOCK NO. : ${data.block_height}<br>
                    SENDER ADDRESS: 0x${data.addresses[0]}<br>
                    RECEIVER ADDRESS: 0x${data.addresses[1]}<br>
                    CONFIRMATIONS: ${data.confirmations}<br>
                    CONFIRMATION TIME: ${data.confirmed}<br>
                    TRANSACTION VALUE: ${tx_value}`
        $(".search-data-hash").html(text);
       });

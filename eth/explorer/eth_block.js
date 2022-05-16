      var myForm = document.getElementById("form");
      var text = myForm.elements.namedItem("searchTxt").value;
        var url = "https://api.blockcypher.com/v1/eth/main/blocks/" + text;
        $.getJSON(url, function(data) {
          var nonce_num = data.nonce
          var hexString = nonce_num.toString(16);

          var block_t = data.total
          var block_total = block_t / 1000000000000000000

          var block_f = data.fees
          var block_fees = block_f / 1000000000000000000
          var text = `<h1>DATA FOR BLOCK NO. ${data.height}</h1>
                      HEIGHT: ${data.height}<br>
                      BLOCK HASH: 0x${data.hash}<br>
                      PREVIOUS BLOCK HASH: 0x${data.prev_block}<br>
                      NO. OF TX: ${data.n_tx}<br>
                      BLOCK TOTAL AMOUNT: ${block_total} ETH<br>
                      BLOCK FEE: ${block_fees} ETH<br>
                      MINED BY: 0x${data.coinbase_addr}<br>
                      BLOCK SIZE: ${data.size} bytes<br>
                      NONCE: 0x${hexString}`
          $(".search-data-block").html(text);
        });

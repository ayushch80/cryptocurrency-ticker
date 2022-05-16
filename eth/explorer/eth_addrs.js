      var myForm = document.getElementById("form");
      var url = "https://api.blockcypher.com/v1/eth/main/addrs/" + text;
      $.getJSON(url, function(data) {
        var total_r = data.total_received
        var total_s = data.total_sent
        var total_b = data.balance
        var total_balance = total_b / 1000000000000000000
        var total_received = total_r / 1000000000000000000
        var total_sent = total_s / 1000000000000000000
        var text = `<h1>DATA FOR ADDRESS</h1>
                    ADDRESS: ${data.address}<br>
                    TOTAL BALANCE: ${total_balance} ETH<br>
                    TOTAL RECEIVED: ${total_received} ETH<br>
                    TOTAL SENT: ${total_sent} ETH<br>
                    NO. OF TX. : ${data.n_tx}`
        $(".search-data-address").html(text);
       });

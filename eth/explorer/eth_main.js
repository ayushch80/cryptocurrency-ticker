      $.getJSON('https://api.blockcypher.com/v1/eth/main', function(data) {

          var highfee = data.high_gas_price
          var mediumfee = data.medium_gas_price
          var lowfee = data.low_gas_price
          var high_fee = highfee / 1000000000
          var medium_fee = mediumfee / 1000000000
          var low_fee = lowfee / 1000000000

          var highpriorityfee = data.high_priority_fee
          var mediumpriorityfee = data.medium_priority_fee
          var lowpriorityfee = data.low_priority_fee
          var high_priorityfee = highpriorityfee / 1000000000
          var medium_priorityfee = mediumpriorityfee / 1000000000
          var low_priorityfee = lowpriorityfee / 1000000000

          var text = `CURRENT BLOCK HEIGHT: ${data.height}<br>
                      CURRENT FOUND BLOCK TIME: ${data.time}<br>
                      CURRENT BLOCK HASH: 0x${data.hash}<br>
                      PREVIOUS BLOCK HASH (CURRENTLY DISPLAYING INCORRECT): 0x${data.previous_hash}<br>
                      TOTAL UNCONFIRMED TRANSACTIONS: ${data.unconfirmed_count}<br>
                      HIGH GAS FEE: ${high_fee} GWEI<br>
                      MEDIUM GAS FEE: ${medium_fee} GWEI<br>
                      LOW GAS FEE: ${low_fee} GWEI<br>
                      HIGH PRIORITY FEE: ${high_priorityfee} GWEI<br>
                      MEDIUM PRIORITY FEE: ${medium_priorityfee} GWEI<br>
                      LOW PRIORITY FEE: ${low_priorityfee} GWEI<br><br><br>`


          $(".eth").html(text);
      });

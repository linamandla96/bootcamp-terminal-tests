module.exports = function (totalBill){
    console.log(totalBill);
      var bill = totalBill.split(', ');
      var callNum =0;
      var smsNum =0;
      var callCost = 2.75;
      var smsCost = 0.65;
      for(var i = 0;i<bill.length;i++){
      if(bill[i]==='call'){
         callNum++;
      }
    else if(bill[i]==='sms'){
      smsNum++;
     
     }
      }
      var billTotal = (callCost*callNum)+(smsCost*smsNum)
     //console.log(total);
      let billT = billTotal.toFixed(2);
      return ('R' + billT);
    }
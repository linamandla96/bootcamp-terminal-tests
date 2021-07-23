module.exports = function (list){
    var itemlist = list;
      var itemOver20 = [];
      for( var i = 0;i < itemlist.length;i++){
      var products = list[i];
        if (products.qty>20){
          itemOver20.push(products);
        }
    
      }
    
    return itemOver20;
    
    }

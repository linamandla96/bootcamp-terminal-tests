module.exports = function (profit){
    const departmentMep = {};
  for(var i=0; i<profit.length; i++){
     const curProSold = profit[i];
    if(departmentMep[curProSold.department] === undefined){
      departmentMep[curProSold.department] = 0;
    }
    
    departmentMep[curProSold.department] += curProSold.sales;
  }
  var  maxT = 0;
  var highestProfitDip = "";
  for(var departmentName in departmentMep ){
    var departmentTotal = departmentMep[departmentName];
    if(departmentTotal > maxT){
      maxT = departmentTotal;
      highestProfitDip = departmentName;
    }
    
  }
  return highestProfitDip;
}
function mostProfitableDay(profit){
  const dayMep = {};
  
  for(var i=0; i<profit.length; i++){
    const curProSold = profit[i];
  if(dayMep[curProSold.day] === undefined){
    dayMep[curProSold.day] = 0;
  }
    
    dayMep[curProSold.day] += curProSold.sales;
  }
  var maxT = 0;
  var highestprofitday = "";
  for(var dayName in dayMep){
    var dayTotal = dayMep[dayName];
    if(dayTotal > maxT){
      maxT = dayTotal;
    highestprofitday = dayName;
    }
  }
  return highestprofitday;
}
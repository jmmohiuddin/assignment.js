//https://github.com/jmmohiuddin/javascript-assignment

//1st feature is converter kilometer to meter
function kilometerToMeter(kilometer) {
  if (kilometer > 0) {
    var meter = kilometer * 1000; //we know 1 kilometer=1000meter
    return meter;
  } else if (kilometer < 0) {
    console.log("please correct your number");
    return meter;
  }
}

var gulistan = kilometerToMeter(2);
console.log(gulistan);
var mohamadpur = kilometerToMeter(5);
console.log(mohamadpur);

//2nd feature budget calculator

function budgetCalculator(watch, mobile, laptop) {
  var fixedwatchprice = 50;
  var fixedmobileprice = 100;
  var fixedlaptopprice = 500;
  var totalDevicePrice =
    watch * fixedwatchprice +
    mobile * fixedmobileprice +
    laptop * fixedlaptopprice;
  return totalDevicePrice;
}
var MohiuddinBuy = budgetCalculator(1, 2, 3);
console.log(MohiuddinBuy);

// //3rd feature is hotel cost

function hotelCost(day) {
  var orginalCost = 0;
  if (day <= 10) {
    var orginalCost = day * 100;
  } else if (day <= 20) {
    var InTendayCost = 10 * 100;
    var remainingCost = day - 10;
    var TenToTweentydayCost = remainingCost * 80;
    var orginalCost = InTendayCost + TenToTweentydayCost;
  } else {
    var InTendayCost = 10 * 100;
    var TenToTweentydayCost = 10 * 80;
    var remainingCost = day - 20;
    var afterTweentyDayCost = remainingCost * 50;
    var orginalCost = InTendayCost + TenToTweentydayCost + afterTweentyDayCost;
  }
  return orginalCost;
}
var seradon = hotelCost(21);
console.log(seradon);

//4th feature is megafriend

function megaFriend(name) {
  var count = 0;
  for (var i = 0; i < name.length; i++) {
    if (count == name[i]) {
      count++;
    }
  }
  count++;
  return count;
}
var freind = ("jahid", "sihab", "sohidul", "anik,", "Imran tanvir");
console.log(freind);

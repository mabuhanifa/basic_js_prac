function radianToDegree(radian) {
  if (typeof radian !== "number") {
    alert("please enter a number");
    return;
  } else {
    return (radian * (180 / Math.PI)).toFixed(2);
  }
}
console.log(radianToDegree(5));

function isJavaScriptFile(filename) {
  if (typeof filename !== "string") {
    alert("enter a string");
    return;
  }
  return filename.split(".").pop() === "js";
}

console.log(isJavaScriptFile("index.js.js"));

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  //error handling
  if (
    (typeof dieselQuantity ||
      typeof petrolQuantity ||
      typeof octaneQuantity) !== "number" ||
    dieselQuantity < 0 ||
    petrolQuantity < 0 ||
    octaneQuantity < 0
  ) {
    return "please ensure that every input is  a number and there is no negative value ";
  }

  const perDiesel = 114;
  const perPetrol = 130;
  const perOctane = 135;

  // price calculation
  const totalDiesel = dieselQuantity * perDiesel;
  const totalPetrol = petrolQuantity * perPetrol;
  const totalOctane = octaneQuantity * perOctane;

  const totalPrice = totalDiesel + totalPetrol + totalOctane;

  return totalPrice;
}

console.log(oilPrice(30, 20, 10));

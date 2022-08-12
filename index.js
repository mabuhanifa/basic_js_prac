/*-------------problem 1----------------*/
function radianToDegree(radian) {
  //error handling
  if (typeof radian !== "number") {
    //error message
    return "please enter a number";
  } else {
    return (radian * (180 / Math.PI)).toFixed(2);
  }
}
console.log(radianToDegree(5));

/*-------------problem 2----------------*/
function isJavaScriptFile(filename) {
  //error handling
  if (typeof filename !== "string") {
    //error message
    return "enter a string";
  }
  return filename.split(".").pop() === "js";
}

console.log(isJavaScriptFile("index.js.js"));

/*-------------problem 3----------------*/
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
    //error message
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

/*-------------problem 4----------------*/
function publicBusFare(visitor) {
  // price calculation
  let bus = 50;
  let microBus = 11;
  let busAmount = visitor % bus;
  let microBusAmount = busAmount % microBus;
  //error handling
  if (typeof visitor !== "number" || visitor < 50) {
    //error  message
    return "Please enter a number of visitors and the number of visitors should be more than 50";
  } else {
    return microBusAmount * 250;
  }
}

console.log(publicBusFare(110));

/*-------------problem 5----------------*/
function isBestFriend() {
  return (
    arguments[0].name === arguments[1].friend &&
    arguments[0].friend === arguments[1].name
  );
}

console.log(
  isBestFriend(
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
  )
);

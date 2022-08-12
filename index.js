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

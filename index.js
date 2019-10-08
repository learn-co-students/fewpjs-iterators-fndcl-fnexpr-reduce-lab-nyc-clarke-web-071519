const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//sum of all battery amounts

let totalBatteries = batteryBatches.reduce((total, element) => {
  return element + total;
}, 0);

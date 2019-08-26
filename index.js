const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let total = 0
// return batteryBatches.reduce(battery => {
//     return total += battery
// })

// console.log(batteryBatches.reduce(batteryCount, 0))

// return batteryBatches.reduce( num => {
//     total = 0
//    return  total += num
// })

const totalBatteries = batteryBatches.reduce(function (total, element) { return element + total }, 0)


// let doubledAndSummed = [1, 2, 3].reduce(function (total, element) { return element * 2 + total }, 0)

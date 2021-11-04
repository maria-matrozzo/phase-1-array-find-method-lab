

//   function superbowlWin(record) {
//     if (record.result === "W") {
//         return record.year;
//     }
// }

// function superbowlWin(myArray) {
//     if yearWin = myArray.find(element => element.result === "W") {
//       return yearWin.year
//     } else return undefined
//   }
//   superbowlWin(record)


// function superbowlWin(record) {
//     let result = record.find(record => {
//         if (record.result === "W"){
//         return record.year;
//         }
//     })
//     return result.year;
// }

const sadReality = record.find(element => element.result === "W");
const yearWon = record.find(element => element.year === "1969");

function superbowlWin(record) {
    if (sadReality) {
        return yearWon;
    } 
}
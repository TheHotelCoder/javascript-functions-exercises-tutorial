
// const rapid = (myString) => {
//     let consonants = [];
//     for(let position in myString){
//         if(['a','e','i','o','u'].includes(myString[position]) == false)
//             consonants.push(myString[position])
//     }
//     return consonants.join('').toUpperCase();
// }


const rapid = (string) => {
    let newString = []
    for(let x in string) {
        if (string[x] != "a" && string[x] != "e" && string[x] != "i" && string[x] != "o" && string[x] != "u") {
            newString.push(string[x].toUpperCase())
        }
    }
 return newString.join("")
}


// From this line up Do not change code below
let str = "John";
console.log(rapid(str));



// const rapid =(myString) => {
//     let newString = "";
//     console.log(newString)
//     for (var i=0; i<myString.length; i++) {
//         if (myString.charAt(i) != 'a' && 
//             myString.charAt(i) != 'e' &&
//             myString.charAt(i) != 'i' &&
//             myString.charAt(i) != 'o' &&
//             myString.charAt(i) != 'u' ) 
//         {
//             newString+=myString.charAt(i).toUpperCase() 
//         }       
//         if (i==myString.length-1) {
//              return newString
//         }
//     }
// }
//  console.log(rapid("hola"))
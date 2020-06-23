//Objective is to turn a roman integer into a decimal integer.

let s = 'IV'


//O(n) solution that maps the respective roman values to their integer values.

//Map of roman to integer
let dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
}

let total = 0

for (let i = 0; i < s.length; i++) {
    //If something like 'IV' is passed, then concat it together
    //and skip over the next index
    if (dictionary[s[i].concat(s[i + 1])]) {
        total += dictionary[s[i].concat(s[i + 1])]
        i++
    } else {
        total += dictionary[s[i]]
    }
}

return total
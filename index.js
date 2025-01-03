////only separated by comma
const calculatorCommaSeparated = (numstr) => {
    let arr = []
    numstr.split(',').map(e=>{
        arr.push(Number(e))
    })
    const total = arr.reduce((acc, curr) => acc + curr, 0)
    return total
}
////only separated by new line \n
const calculatorNewLineSeparated = (numstr) => {
    let arr = []
    numstr.split('\n').map(e=>{
        arr.push(Number(e))
    })
    console.log(arr)
    const total = arr.reduce((acc, curr) => acc + curr, 0)
    return total
}
/*
Separator can be defined at the beginning, or it can be default comma or newline both. If defined, it can be multiple separators, defined in two possible formats, either like this ,.; or like this [,][.][;] . Also if separated by []. it can hold more than one character like this [;;;] or [helloworld]
*/
const calculatorFinal = (numstr) => {
    let arr = [] /// blank arr initialized to store the numbers
    const delimiterCheck = numstr.match(/^\/\/(.+)\n/)  ///check if single delimiter set defined at beginning 
    const multipleDelimiterCheck = numstr.match(/^\/\/\[(.+)]\n/) ///check if mukltiple delimiter set defined at beginning 
    // console.log(delimiterCheck)
    let delimiter = /[,\n]/; ///default delimiter set to comma and new line
    
    if (multipleDelimiterCheck) { ///first check multiple as it can also be counted as single and would lead to errors
        console.log('multipleDelimiterCheck', multipleDelimiterCheck[1].replace(/\[/g, '').replace(/\]/g, '') )
        delimiter = new RegExp(`[${multipleDelimiterCheck[1].replace(/\[/g, '').replace(/\]/g, '')}]`);
         numstr = numstr.replace(/^\/\/\[(.+)]\n/, '')
    }
    else if (delimiterCheck) { ///if not multiple then check in this format
        delimiter = new RegExp(`[${delimiterCheck[1]}]`);
        numstr = numstr.replace(/^\/\/(.+)\n/, '')  
    }
    // console.log('delimiter', delimiter)
    numstr.split(delimiter).map(e=>{ /// split with delimiter
        arr.push(Number(e)) /// push the numbers in array
    })
    // console.log(arr)
    const negativeNumbers = arr.filter(num => num < 0); /// check if any negative number
    if (negativeNumbers.length === 0) { /// if no negative number then proceed
        const total = arr.filter(num => num <= 1000).reduce((acc, curr) => acc + curr, 0) /// remove numbers greater than 1000 before addition
        return total
    } else {
        throw new Error(`negatives not allowed : ${negativeNumbers.join(', ')}`) /// throw error if negative number found along with the numbers

    }

}
module.exports = {calculatorCommaSeparated, calculatorNewLineSeparated, calculatorFinal};
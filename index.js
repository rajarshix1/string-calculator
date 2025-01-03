const calculatorCommaSeparated = (numstr) => {
    let arr = []
    numstr.split(',').map(e=>{
        arr.push(Number(e))
    })
    const total = arr.reduce((acc, curr) => acc + curr, 0)
    return total
}
const calculatorNewLineSeparated = (numstr) => {
    let arr = []
    numstr.split('\n').map(e=>{
        arr.push(Number(e))
    })
    console.log(arr)
    const total = arr.reduce((acc, curr) => acc + curr, 0)
    return total
}
const calculatorFinal = (numstr) => {
    let arr = []
    const delimiterCheck = numstr.match(/^\/\/(.+)\n/) 
    console.log(delimiterCheck)
    let delimiter = /[,\n]/;
    if (delimiterCheck) {
        delimiter = new RegExp(`[${delimiterCheck[1]}]`);
        numstr = numstr.replace(/^\/\/(.+)\n/, '')  
    }
    console.log('delimiter', delimiter)
    numstr.split(delimiter).map(e=>{
        arr.push(Number(e))
    })
    console.log(arr)
    const negativeNumbers = arr.filter(num => num < 0);
    if (negativeNumbers.length === 0) {
        const total = arr.reduce((acc, curr) => acc + curr, 0)
        return total
    } else {
        throw new Error(`negatives not allowed : ${negativeNumbers.join(', ')}`)

    }

}
module.exports = {calculatorCommaSeparated, calculatorNewLineSeparated, calculatorFinal};
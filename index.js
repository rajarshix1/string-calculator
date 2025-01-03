const calculator = (numstr) => {
    let arr = []
    numstr.split(',').map(e=>{
        arr.push(Number(e))
    })
    const total = arr.reduce((acc, curr) => acc + curr, 0)
    return total
}
module.exports = calculator;
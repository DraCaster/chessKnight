const challengeFunction = function(cell){

    let result = cell.split("")

    let movimientos = 8

    if(result[0] === 'A' || result[0] === 'H'){
        movimientos = movimientos - 4
    }
    if(result[0] === 'B' || result[0] === 'G'){
        movimientos = movimientos -2
    }
    if(result[1] === '1' || result[1] === '8'){
        movimientos = movimientos - 4
    }
    if(result[1] === '2' || result[1] === '7'){
        movimientos = movimientos -2
    }

    if((result[0] === 'B' || result[0] === 'H')&&(result[1] === '1' || result[1] === '8')){
        movimientos++
    }

    if(movimientos === 0){
        movimientos = 2
    }

    return movimientos
}

module.exports = challengeFunction

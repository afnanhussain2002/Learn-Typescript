// wrong method
function indetityTwo(val: any):any {
    return val
}

// write method

function indetityThree<Type>(val: Type): Type{
    return val
}

indetityThree("3")
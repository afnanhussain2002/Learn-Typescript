// wrong method
function indetityTwo(val: any):any {
    return val
}

// write method

function indetityThree<Type>(val: Type): Type{
    return val
}

interface Bottle{
    brand: string,
    quintity: number
}

indetityThree<Bottle>({brand:"Mugdho", quintity:23})


// func with generics 

function getSearch<T>(product:T[]): T {
  const myIndex = 2
  return product[myIndex]
}
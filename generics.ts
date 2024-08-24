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

// arrow func with generics 

const getApple = <T>(apple: T[]) : T =>{
    return apple[3]
}

// generics class

interface Quiz{
    name: string,
    type: string
}


interface Course{
    name:String,
    author:String,
    Subject:String
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
}
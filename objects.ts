// function that return object
function createCourse():{name:string,price: number}{
    return {name:"Next js", price: 399}
}

// using type keyword

type User ={
    name: string,
    email: string,
    isActive: boolean
}
function createUser(user: User){}

createUser({name:"Afnan", email:"", isActive: true})

export{}


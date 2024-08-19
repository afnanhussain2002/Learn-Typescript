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


type Super = {
   readonly _id: string,
   SuperName: string,
   Pay?: number
}

let myUser: Super = {
    _id:"1234",
    SuperName:"A"
}

myUser.SuperName = "Afnan"
// myUser._id = "fjjf" cant change the _id becouse it was readOnly
export{}


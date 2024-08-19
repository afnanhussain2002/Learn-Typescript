// can be change the data type

let score: number | string | boolean = 33 

score = "My Score is 89"
score = false

// can change the type of data

type User = {
    name:string,
    id: number
}
type Admin = {
    username:string,
    id: number
}

let afnan: User | Admin = {name:"Afnan", id:31}

afnan = {username:"afnan", id:4}

export{}


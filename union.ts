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

// can change the type of data in function

function getId(id: number | string){
    console.log(`DB id is: ${id}`);
}

getId(34)
getId('jfdsfjsfj32')



export{}


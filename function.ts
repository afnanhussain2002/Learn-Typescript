function addTow(num: number) {
  return num + 2;
}

addTow(4);

// have to return a number
function addTow2(num: number): number {
  return num + 2;
}

addTow2(4);

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("Afnan Hussain");

// multiple value

function singUp(name: string, email: string, isMale: boolean) {
  return {
    name,
    email,
    isMale,
  };
}


singUp("Afnan", "afnan@gmail.com", true);

// arrow func with default value

let loginUser = (name: string, email:string, isMale: boolean = true) =>{

}

loginUser("Afnan", "afnan@gmail.com")

// arrow func with have to return string

const getHello = (s: string):string =>{
    return ""
}

// write a map func where ts automatic know what the value is

// const heros = ["thor", "spiderMan", "superMan"]
const heros = [1, 2, 3]

heros.map(hero =>{
    return `hero is ${hero}`
})



export {};

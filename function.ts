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

export {};

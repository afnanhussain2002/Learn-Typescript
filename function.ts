function addTow(num:number) {
    return num + 2
}

addTow(4)

function getUpper(value: string) {
    return value.toUpperCase()
}

getUpper('Afnan Hussain')

// multiple value

function singUp(name: string, email: string, isMale:boolean) {
    return {
     name,
        email,
          isMale

    }
}

singUp('Afnan', 'afnan@gmail.com', true)

export{}
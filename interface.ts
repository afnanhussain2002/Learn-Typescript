interface User {
   email: string,
  readonly userId: number,
  goggleId?: number,
  system:() => string,
  system2(): number

}

const afnan: User = {email: "afnan@gmail.com", userId:12,
    system: () =>{
        return "Afnan Hussain"
    },
    system2: () =>{
        return 12
    }
}

export{}
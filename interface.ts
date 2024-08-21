interface User {
   email: string,
  readonly userId: number,
  goggleId?: number,
  system:() => string

}

const afnan: User = {email: "afnan@gmail.com", userId:12,
    system: () =>{
        return "Afnan Hussain"
    }
}

export{}
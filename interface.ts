interface User {
   email: string,
  readonly userId: number,
  goggleId?: number,
  system:() => string,
  system2(coupon:string): number

}

const afnan: User = {email: "afnan@gmail.com", userId:12,
    system: () =>{
        return "Afnan Hussain"
    },
    system2: (couponName:"Talu2") =>{
        return 12
    }
}

export{}
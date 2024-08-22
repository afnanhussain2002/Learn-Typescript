class User{
    readonly city: string = "Sylhet"
    constructor(
        public email: string,
        public name: string,
       private password: string
    ){

    }

   get getAppleEmail():string{
        return `apple${this.email}`
    }
}



export{}
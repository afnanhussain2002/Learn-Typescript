/* class User {
  private  email: string
  public  name: string
   readonly city: string = "Sylhet"


    constructor(email:string, name: string,){
        this.email = email
        this.name = name
   
    }
} */

    // some people write it like

    class User{
        readonly city: string = "Sylhet"
        constructor(
            public email: string,
            public name: string,
           private password: string
        ){

        }
    }

const afnan = new User("afnan@gamil.com", "Afnan", "password")


afnan.name = "Hussain"
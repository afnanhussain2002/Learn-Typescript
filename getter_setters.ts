class User{
    private _courseCount = 1


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

    get courseCount():number {
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("More then 1")
        }
        this._courseCount
    }


}



export{}
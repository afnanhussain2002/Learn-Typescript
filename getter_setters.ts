class User{
    private _courseCount = 1
    protected _shareCourse = 2


    readonly city: string = "Sylhet"
    constructor(
        public email: string,
        public name: string,
       private password: string
    ){

    }

    private deleteToken(){
        return "Token deleted"
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

class SubUser extends User{
    isFriend: boolean = true

    changeCourseCount (){
        this._shareCourse = 4
    }
}




export{}
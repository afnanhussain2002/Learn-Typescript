 abstract class Movie{
    constructor(
        public movieName: string,
        public category: string
    ){}
 }

 class NewMovie extends Movie{

 }

 const movie = new NewMovie("Avengers", "Action")
import Book from "./book";

class booking extends Book{
    constructor(isbn, title, author, status = false, client){
        super(isbn, title, author, status = false, client)
    }
    setClient(client)
    {
        this.client = client
    }
      
    getClient()
    {
        return this.client;
    }
    toString()
    {
        return `${this.getIsbn()}  | Title: " << ${this.getTitle()} | Author: ${this.getAuthor()} | Client: ${this.getClient().getLogin()}`
    }
}
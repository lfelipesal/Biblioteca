
export default class Book{
    constructor(isbn, title, author, status = true){
        this.isbn= isbn
        this.author=author
        this.title=title
        this.status = status
    }
  getIsbn()
  {
    return this.isbn
  }
  setIsbn(isbn)
  {
    this.isbn = isbn
  }
  getTitle()
  {
    return this.title
  }
  setTitle(title)
  {
    this.title = title
  }
  getAuthor()
  {
    return this.author
  }
  setAuthor(author)
  {
    this.author = author
  }
  getStatus()
  {
    return this.status
  }
  setStatus(status)
  {
    this.status = status
  }
  static toString()
  {
    return ` ${this.getIsbn()} | Title: ${this.getTitle()} | Author: ${this.getAuthor()}`
  }
}

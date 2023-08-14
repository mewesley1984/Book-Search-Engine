
const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [BookOutput]
  }

  
type Auth {
    token: String!
    user: User
}

type Query {
    me: User
}

input Book {
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
    description: String
}
type BookOutput {
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
    description: String
}
type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteBook(bookID: String!): User
    saveBook(book: Book): User
}

`

module.exports = typeDefs
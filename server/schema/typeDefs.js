
const typeDefs = `
type User {
    username: String
    email: String
    password: String
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
    deleteBook(bookID: String!): Boolean
    saveBook(book: Book): User
}

`

module.exports = typeDefs
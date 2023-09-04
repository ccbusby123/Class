// 2. Construct an object representing a book

const book = {
  title: "Javascript for the average person",
  author: "Joe Javascript",
  pubYear: 2023,
  genre: "Front-end web development",

};

//3. Implement functions to add, modify, and delete properties from this book object.

//add to book object
book.numberOfPages = 500;

//modify properties of the book object
book.author = "Jack Javascript";

//delete from book object
delete book.genre;

//Display books properties
for (let key in book) {
  // keys
  alert( key );
  // values for the keys
  alert( book[key] );
}


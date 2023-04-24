const add = document.querySelector(".button");

const books = JSON.parse(localStorage.getItem('new-list')) || [
  {
    title: "Faust",
    author: "Goethe",
  },
  {
    title: "For Whom the Bell Tolls",
    author: "Ernest Hemingway",
  },
  {
    title: "Old Man and the Sea",
    author: "Ernest Hemingway",
  },
  {
    title: "Freedom at Midnight",
    author: "Collins",
  },
  {
    title: "Jungle Book",
    author: "Ruskin Bond",
  },
  {
    title: "Illiad",
    author: "Homer",
  }
];

console.log(books, add)

// When some1 hits add 

function addFunction(e){
   e.preventDefault();
 console.log('this is add function', books[0].title, books[0].author)
  let title = document.querySelector('.title')
  let author = document.querySelector('.author')
  let list = document.querySelector('#list')

  const new_book = {
    title: title.value,
    author: author.value
  }


  books.push(new_book);
//////////// display all books
//// first reset list
// put it to locall server 

localStorage.setItem('new-list', JSON.stringify(books))
list.innerHTML = ''

//then loop through books array and add + everything
books.forEach((book, index)=>{   // += add 
  list.innerHTML += ` 
  <div data-index=${index}>
  <p> title = ${book.title} <br /> Author = ${book.author} </p>
  <p>
       <button>Remove</button>
     </p>
     <hr />
 
 </div>
 `
})

}

add.addEventListener('click', addFunction)


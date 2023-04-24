const add = document.querySelector('.button');
const remove = document.querySelector('.close');
const books = JSON.parse(localStorage.getItem('new-list')) || [
  {
    title: 'Faust',
    author: 'Goethe',
  },
  {
    title: 'For Whom the Bell Tolls',
    author: 'Ernest Hemingway',
  },
  {
    title: 'Old Man and the Sea',
    author: 'Ernest Hemingway',
  },
  {
    title: 'Freedom at Midnight',
    author: 'Collins',
  },
  {
    title: 'Jungle Book',
    author: 'Ruskin Bond',
  },
  {
    title: 'Illiad',
    author: 'Homer',
  },
];

// When some1 hits add

function addFunction(e) {
  e.preventDefault();
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const list = document.querySelector('#list');

  const newbook = {
    title: title.value,
    author: author.value,
  };

  books.push(newbook);
  /// ///////// display all books
  /// / first reset list
  // put it to locall server

  localStorage.setItem('new-list', JSON.stringify(books));
  list.innerHTML = '';

  // then loop through books array and add + everything
  books.forEach((book, index) => {
    list.innerHTML += ` 
  <div id="boi${index}" data-index=${index}>
  <p> ${book.title} <br /> ${book.author} </p>
  <p>
    <button class="close" id=${index} data-index=${index} onclick='removeFunction(this)'>Remove</button>
  </p>
  <hr />
  </div>
 `;
  });
}
add.addEventListener('click', addFunction);
function removeFunction(button) {
  const num = button.id;
  const rmv = document.getElementById(`boi${num}`);
  rmv.remove();
  localStorage.removeItem('new-list', JSON.stringify(books));
}

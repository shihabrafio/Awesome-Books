const list = document.querySelector('#list');
const add = document.querySelector('.button');
const remove = document.querySelector('.close');
let books = JSON.parse(localStorage.getItem('new-list')) || [
  {
    title: 'Faust',
    author: 'Goethe',
    id: 0,
  },
  {
    title: 'For Whom the Bell Tolls',
    author: 'Ernest Hemingway',
    id: 1,
  },
  {
    title: 'Old Man and the Sea',
    author: 'Ernest Hemingway',
    id: 2,
  },
  // {
  //   title: 'Freedom at Midnight',
  //   author: 'Collins',
  // },
  // {
  //   title: 'Jungle Book',
  //   author: 'Ruskin Bond',
  // },
  // {
  //   title: 'Illiad',
  //   author: 'Homer',
  // },
];

// When some1 hits add

function renderBooks(){
  localStorage.setItem('new-list', JSON.stringify(books));
  list.innerHTML = '';
  books.forEach((book, index) => {
    list.innerHTML += ` 
  <div id="boi${index}" data-index=${index}>
  <p> ${book.title} <br /> ${book.author} </p>
  <p>
    <button class="close" id=${index} onclick='removeFunction(this)'>Remove</button>
  </p>
  <hr />
  </div>
 `;
  });
}

function addFunction(e) {
  e.preventDefault();
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  if(title.value.trim() === '' || author.value.trim() === ''){
    return;
  }
  const newbook = {
    title: title.value,
    author: author.value,
    id: books.length
  };
  books.push(newbook);
  document.querySelector('form').reset();
  renderBooks();
}

function updateIndex(){
  books.forEach((book, index)=>{ 
    book.id = index;
  })
}

function removeFunction(button) {
  const num = parseInt(button.id); 
  books = books.filter((book) => book.id !== num )
  updateIndex();
  renderBooks();
}

add.addEventListener('click', addFunction);

window.location.reload = renderBooks();
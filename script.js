const addNew = document.getElementById('add-new');
const read = document.getElementById('read');
const contact = document.getElementById('contact');
const booklist = document.getElementById('book-list');
const go = document.getElementById('go');
const then = document.getElementById('then');
const navitem = document.querySelectorAll('.navitem');

// date

const timedate = new Date();
let date = timedate.toDateString();
const time = timedate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

let x = '';
date.split(' ').forEach((str, i) => {
  if (i === 0 || i === 2) {
    x += `${str}, `;
  } else {
    x += `${str} `;
  }
});
date = x;
document.querySelector('.date').innerHTML = `
<div> ${date} </div> 
<div class='bar'> </div> 
<div> ${time} </div>
`;

addNew.classList.add('active');
contact.classList.add('active');
booklist.classList.add('active');

navitem.forEach((item) => {
  item.addEventListener('click', (nav) => {
    const { id } = nav.target;
    if (id === 'go') {
      addNew.classList.remove('active');
      read.classList.add('active');
      contact.classList.add('active');
      go.classList.add('active');
      booklist.classList.remove('active');
      then.classList.remove('active');
    } else if (id === 'then') {
      contact.classList.remove('active');
      addNew.classList.add('active');
      read.classList.add('active');
      go.classList.remove('active');
      booklist.classList.remove('active');
      then.classList.add('active');
    } else {
      read.classList.remove('active');
      addNew.classList.add('active');
      contact.classList.add('active');
      go.classList.remove('active');
      booklist.classList.add('active');
      then.classList.remove('active');
    }
  });
});
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
];

class NewBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = books.length;
  }

  static renderBooks() {
    localStorage.setItem('new-list', JSON.stringify(books));
    list.innerHTML = '';
    books.forEach((book, index) => {
      list.innerHTML += ` 
    <div id="boi${index}" class='one-book-list'>
    <p> "${book.title}" by <i>  ${book.author} </i> </p>
    <p>
      <button class="close" id=${index} onclick='NewBook.removeFunction(this)'>Remove</button>
    </p>
    </div>
   `;
    });
  }

  static addFunction(e) {
    e.preventDefault();
    const title = document.querySelector('.title').value.trim();
    const author = document.querySelector('.author').value.trim();
    if (title === '' || author === '') {
      return;
    }
    const newbook = new NewBook(title, author);
    books = books.concat(newbook);
    document.querySelector('form').reset();
    document.querySelector('.title').focus();
    NewBook.renderBooks();
  }

  static updateIndex() {
    books.forEach((book, index) => {
      book.id = index;
    });
  }

  static removeFunction(button) {
    const num = parseInt(button.id, 10);
    books = books.filter((book) => book.id !== num);
    NewBook.updateIndex();
    NewBook.renderBooks();
  }
}

add.addEventListener('click', NewBook.addFunction);

window.location.reload = NewBook.renderBooks();

const form = document.querySelector('.form');
const nameInput = document.querySelector('#Bname');
const authorInput = document.querySelector('#Aname');
const rnInput = document.querySelector('#rn');

let state = {
    books: [],
};


// Submit form
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const books = {
        name: nameInput.value,
        author: authorInput.value,
        rn: rnInput.value
    };
    await axios.post('https://crudesd.herokuapp.com/books', books).then(async (response) => {
        
        console.log(response)
        nameInput.value = '';     
        authorInput.value = '';
        rnInput.value = ''
    })
});

const getItems = async () => {
    await axios.get('https://crudesd.herokuapp.com/books').then((res) => {
        res.data.forEach(element => {
            state.books = [...state.books, element];
        });
        console.log(res.data)
        return 1
    })
}

// update a book
const updateBook = async (id) => {
  
};

// delete book
const deleteBook = async (id) => {
   
};

window.onload = getItems();
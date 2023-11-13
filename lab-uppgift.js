import {books} from "./books.js"

//1 Hur många böcker finns det i affären?
console.log(`Det finns ${books.length} böcker i affären, du lyckades inte lura oss!`);

console.log("=========================");
console.log("Namn på alla böcker: ")
//2 Skriv ut namnen på alla böcker
books.forEach(books =>  {
    console.log(books.title);
})
console.log("=========================");
console.log("Namn och pris på alla böcker med genre Fantasy: ")
//3 Skriv ut namn och pris för alla böcker av typen "Fantasy"
books.forEach(books =>  {
    if(books.genre === "Fantasy") {
    console.log(books.title, books.price);
}
})
console.log("=========================");
console.log("Namn och genre för alla klassiker, dystopier och mysterieböcker: ")
//4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker
books.forEach(books =>  {
    if(books.genre === "Classic" || books.genre === "Dystopian" || books.genre ==="Mystery") {
    console.log(`${books.title}, (${books.genre})`);
}
})
console.log("=========================");
console.log("Namn och namn och pris för alla böcker som kostar över $10: ")
// 5 Skriv ut namn och pris för alla böcker som kostar över $10.
books.forEach(books =>  {
    if(books.price > 10) {
    console.log(`${books.title}, (${books.price})`);
}
})
console.log("=========================");
console.log("Vad är det totala priset, om man skulle sälja alla böcker?");
//6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)
let summa = 0;
books.forEach(books =>  {
    summa += books.price;
   })
let roundSumma = Math.round(summa);
console.log("Total kostnad på alla böcker är", roundSumma);

console.log("=========================");
console.log("Vilka böcker är sammanlagt värda mest, dystopian eller mystery?")
//7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?
let summaD = 0;
let summaM = 0;

books.forEach(books =>  {
    if(books.genre === "Dystopian") {
        summaD+= books.price;
    } else if(books.genre === "Mystery"){
        summaM+= books.price;
    }
})

if(summaD > summaM) {
    console.log("Böcker med genre Dystopian är värde mer än böcker med genre Mystery");
} else if (summaD < summaM){
    console.log("Böcker med genre Mystery är värde mer än böcker med genre Dystopian");
} else {
    console.log("De är lika värda");
}
console.log("=========================");
console.log("Namn på alla böcker i bokstavsordning")
//8 Skriv ut namnen på alla böcker i bokstavsordning.

books.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  
  books.forEach(book => console.log(book.title));
console.log("=========================");
console.log("Vilken bok finns det en dubblett av?")
//9 Vilken bok finns det en dubblett av?
  let titles = [];
  let duplicate = "";
  
  for (let book of books) {
    if (titles.includes(book.title)) {
      duplicate = book.title;
    } else {
      titles.push(book.title);
    }
  }
  
  if (duplicate) {
    console.log(`Dubbletten är: '${duplicate}'`);
  } else {
    console.log('Det finns inga dubbletter.');
  }
  console.log("==================");
//10  Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.


  books.forEach(book => {
    let authorName = book.author;
    let words = authorName.split(' ');
    if (words.length > 2 && !authorName.includes('.')) {
        console.log(`Författare med två ord på ett namn: ${authorName}`);
    }
});
console.log("==================");


//11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.

console.log('Sorterat efter författarens efternamn: ');

function removeLastName(fullName) {
    const parts = fullName.split(' ')
    return parts[parts.length - 1]
}
books.forEach(book => {
    book.lastName = removeLastName(book.author)
});

books.sort((a, b) => {
    if (a.lastName < b.lastName) {
        return -1
    }
    if (a.lastName > b.lastName) {
        return 1
    }
    else {
        return 0
    }
    
});

books.forEach(book => {
    console.log(book.author);
});

console.log("==================");

//12 Skriv ut namnen på alla böcker vars titel inte börjar med "The".
console.log('Böcker vars titel inte börjar med The:') 


books.forEach(book => {
    let bookTitle = book.title;
    if (!bookTitle.startsWith('The')) {
        console.log(bookTitle);
    }
});

console.log("==================");

//13 Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.
books.sort ((a,b) => a.title.length - b.title.length);

books.forEach(books => console.log(books.title));

console.log("==================");

// 14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.

function addBook(id, title, author, genre, price) {
    let newBook = {
        id: 26,
        title: 'Tomorrow, and Tomorrow, and Tomorrow ',
        author: 'Gabrielle Zevin',
        genre: 'Contemporary fiction',
        price: 19.99
    }
  
    books.push (newBook)
}

addBook("id", "Boktitel", "Författare", "Genre", 19.99);
console.log(books);
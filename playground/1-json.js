const book = {
    title: 'Algorithms to Live By',
    author: 'Brian Christian & Thomas L. Griffins'
}


const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log('Book Title: ' + parsedData.title + 'Author: ' + parsedData.author)
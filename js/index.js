const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    
    
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
            
}
 const displaySearchResult= books =>{
     const searchResult = document.getElementById('search-result')
     books.forEach(book =>{
     console.log(book)
     const div = document.createElement('div');
     div.classList.add('col');
     div.innerHTML = `
     <div class="card h-100">
       <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-75 mx-auto"  alt="...">
         <div class="card-body">
           <h5 class="card-title">${book.title}</h5>
             <p class="card-text">Author Name : ${book.author_name} <br>
             Publisher : ${book.publisher} <br>
             Publish Date : ${book.publish_date} <br>
             Fist published : ${book.first_publish_year}</p>
        </div>
      </div>
       `;
       searchResult.appendChild(div);
     });
    

}
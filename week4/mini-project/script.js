//make metode fetch

const searchButton = document.querySelector('.search-button');
const enterButton = document.querySelector('.input-keyword');
enterButton.addEventListener('keypress', function(event) {
  if(event.key === "Enter"){
    event.preventDefault();
    searchButton.click();
  }
})
searchButton.addEventListener('click', function () {
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=ec047b4d&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
        const movies =  response.Search;
        // console.log(movies)
        let cards = ''
        movies.forEach(m => cards += showMovies(m))
        const movieContainer = document.querySelector('.movie-container')
        movieContainer.innerHTML = cards; 


        // ketika tombol detail di klik
        const rowMovie = document.querySelector('.movie-container')
        rowMovie.addEventListener('click', (e) => {
          // console.log(e.srcElement.hasAttribute('data-imdbid'));
          if(e.srcElement.hasAttribute('data-imdbid')) {
            let id = e.srcElement.getAttribute('data-imdbid')
            fetch('http://www.omdbapi.com/?apikey=ec047b4d&i=' + id)
            .then(response => response.json())
            .then(response => {
              let detailCards = showMovieDetails(response)
              let getModals = document.querySelector('.modal-body')
              getModals.innerHTML = detailCards;
            })
          }
        });
        // modalDetailBtn.addEventListener('click', function () {
            
        // })
        // modalDetailBtn.forEach(btn => {
        //     btn.addEventListener('click', function () {
        //         console.log(this);
        //     });
        // });
    });
});



// make metode jquery

// $('.search-button').on('click', function (){
    
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=ec047b4d&s=' + $('.input-keyword').val(),
//         success: results => {
//             // console.log(results);
//             const movies = results.Search;
//             let cards = ''
//             movies.forEach(m => {  
//                 cards += showMovies(m);
//             });
//             $('.movie-container').html(cards);
    
//             $('.modal-detail-button').on('click', function() {
//                 //Ngecek datanya udah masuk apa belum make console
//                 // console.log($(this).data('imdbid'));
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=ec047b4d&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetails(m);
                        
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 })
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });

// });




function showMovies(m) {
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#ModalMovieButton" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
      </div>
    </div>`
};

function showMovieDetails(m) {
   return `<div class="container-fluid">
    <div class="row">
    <div class="col-md-3">
    <img src="${m.Poster}" class="img-fluid">
    </div>
    <div class="col-md">
    <ul class="list-group">
            <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
            <li class="list-group-item"><strong>Director : </strong> ${m.Director} </li>
            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
    </ul>
    </div>
    </div>
    </div>`;
};
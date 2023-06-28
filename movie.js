let s=document.getElementById("Submit");
let id=document.getElementById("movie_id");
let details_dis=document.getElementsByTagName("p");
const movie = new XMLHttpRequest();
s.onclick=function(){
    movie.open("GET",`http://www.omdbapi.com/?t=${id.value}&apikey=2972598a`);
    movie.onloadend = detailsAjaxResponse;
    movie.send();
};

let detailsAjaxResponse = function() {
    if (movie.status===200) {
        let response=JSON.parse(movie.responseText);
        let name=response['Title'];
        let director=response['Director'];
        let imdb_rating=response['imdbRating'];
        details_dis[0].innerHTML="Name : "+name+"<br>"+"Director : "+director+".<br>"+"IMDB Rating : "+imdb_rating;
   } else {
    details_dis[0].inner.HTML="Something went wrong";
   }
};

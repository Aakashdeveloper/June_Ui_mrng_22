var mname = "Avengers";
var rating = 4.5
var ind = "Hollywood"

var mname1 = "Jab We Met";
var rating1 = 4.8
var ind1 = "Bollywood"

let movie = {
    mname:"Avengers",
    rating:4.5,
    ind:"Hollywood"
}

movie.mname
'Avengers'
movie.rating
4.5
movie.type="Action"
'Action'
movie
{mname: 'Avengers', rating: 4.5, ind: 'Hollywood', type: 'Action'}
movie.rating=4.6
4.6
movie
{mname: 'Avengers', rating: 4.6, ind: 'Hollywood', type: 'Action'}
delete movie.ind
true
movie
{mname: 'Avengers', rating: 4.6, type: 'Action'}

movie['ind']
'Hollywood'
movie['rating']
4.5
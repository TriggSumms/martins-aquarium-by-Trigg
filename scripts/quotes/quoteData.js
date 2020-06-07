let quoteCollection=[
/*  {
   phrase: "This ain't the first time I've been caught shoplifting at the BassPro", 
},
{
    phrase: "Time to see whats been eating all my Scrimpz", 
 },
 {
    phrase: "Em gosh dang Eel Boiz ate my babi", 
 }*/
]

const getQuoteData = () => {
   return fetch("http://localhost:8088/quotes").then(
       (triggResponse) => {
           return triggResponse.json()
       }
   )
       .then(
           (arrayOfQuote) => {
               // 100 percent sure the data is back
               quoteCollection = arrayOfQuote
           }
       )
}
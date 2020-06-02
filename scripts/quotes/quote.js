
  
/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
  
/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const quoteConverter = (quoteObject) => {

    const quoteHTMLRepresentation = `<section class="quote">
 <ul>
<li>"${quoteObject.phrase}"</li>
 </ul>
</section>`

    return quoteHTMLRepresentation

}



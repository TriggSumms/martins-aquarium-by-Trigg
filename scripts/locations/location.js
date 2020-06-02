  
/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
  
/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const locationConverter = (locationObject) => {

    const locationHTMLRepresentation = `<section class="location">
    <div class="">
        <img class="location__picture"
            src="${locationObject.picture}"
            alt="${locationObject.altName}" />
    </div>
    <div class="location__details">
    <ol>
        ${locationObject.description}
   </ol>
 </div>
</section>`

    return locationHTMLRepresentation

}
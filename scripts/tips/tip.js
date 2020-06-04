  
/*
    This function will convert a single fish object to an
    HTML representation and return it
*/
const tipConverter = (tipObject) => {

    const tipHTMLRepresentation =
     ` <section class="tip">
     
                 ${tipObject.tip}
    
         </section>  `

    return tipHTMLRepresentation

}